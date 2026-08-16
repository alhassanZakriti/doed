"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, type PointerEvent } from "react";

type Logo = { name: string; src: string };

const MIN_LOGOS = 8;
const SPEED_PX_PER_SEC = 48;
const RESUME_DELAY_MS = 800;

function padToMin(logos: Logo[], min: number) {
  if (logos.length === 0) return [];
  if (logos.length >= min) return logos;

  const padded: Logo[] = [];
  while (padded.length < min) {
    padded.push(logos[padded.length % logos.length]);
  }
  return padded;
}

function wrapOffset(offset: number, width: number) {
  if (width <= 0) return 0;
  let next = offset % width;
  if (next > 0) next -= width;
  if (next < -width) next += width;
  return next;
}

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="logo-carousel-item">
      <Image
        src={logo.src}
        alt={logo.name}
        fill
        className="object-contain p-[10%]"
        sizes="(min-width: 1024px) 12vw, (min-width: 640px) 18vw, 28vw"
        draggable={false}
      />
    </div>
  );
}

export function LogoCarousel({ logos }: { logos: Logo[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const items = useMemo(() => padToMin(logos, MIN_LOGOS), [logos]);

  const apply = useCallback(() => {
    offsetRef.current = wrapOffset(offsetRef.current, setWidthRef.current);
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  const measure = useCallback(() => {
    if (!setRef.current) return;
    setWidthRef.current = setRef.current.getBoundingClientRect().width;
    apply();
  }, [apply]);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    if (setRef.current) observer.observe(setRef.current);
    return () => observer.disconnect();
  }, [measure, items]);

  useEffect(() => {
    let frame = 0;

    const tick = (now: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = now;
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      if (!pausedRef.current && !draggingRef.current && setWidthRef.current > 0) {
        offsetRef.current += SPEED_PX_PER_SEC * dt;
        apply();
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [apply]);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current != null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const scheduleResume = () => {
    if (resumeTimerRef.current != null) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      lastTimeRef.current = null;
      resumeTimerRef.current = null;
    }, RESUME_DELAY_MS);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    pause();
    lastXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const dx = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    offsetRef.current += dx;
    apply();
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    scheduleResume();
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={viewportRef}
      className="logo-carousel"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="logo-carousel-track">
        <div ref={setRef} className="logo-carousel-set ">
          {items.map((logo, index) => (
            <LogoTile key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
        <div className="logo-carousel-set" aria-hidden="true">
          {items.map((logo, index) => (
            <LogoTile key={`${logo.name}-dup-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
