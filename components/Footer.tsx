"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { PulseLogo } from "@/components/PulseLogo";
import { Wordmark } from "@/components/DdMark";
import { IconFacebook, IconInstagram, IconLinkedIn } from "@/components/icons";
import { useInViewOnce } from "@/hooks/useInViewOnce";

const sections = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
];

const help = [
  { href: "/contact", label: "Contact" },
  { href: "/help", label: "Help" },
  { href: "/privacy", label: "Privacy & Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
];

export function Footer() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <footer ref={ref} className="relative mt-16 overflow-visible bg-navy-900 text-white md:mt-24">
      <div className="pointer-events-none absolute inset-x-0 -top-[32px] h-[32px] text-navy-900 md:-top-[52px] md:h-[52px]">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0 52 C 360 0 1080 0 1440 52 L1440 52 L0 52 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <PulseLogo size="lg" playing={inView} section="footer" />
      </div>
      <div className={`page-wrap pb-10 pt-16 md:pb-12 md:pt-20 ${inView ? "reveal-top" : "reveal-pending"}`}>
        <div className="mb-10 text-center">
          <Wordmark className="text-2xl text-white" />
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-white/80 sm:text-2xl sm:tracking-[0.28em]">
            CONTINUITY IS KEY
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10">
          <FooterColumn title="Sections" links={sections} />
          <FooterColumn title="Help Center" links={help} />
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-bold">Informations</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Netherlands</li>
              <li>+34 (690) 000-000</li>
              <li>
                <a href="mailto:contact@doed.ma" className="hover:text-white">
                  contact@doed.ma
                </a>
              </li>
              <li className="pt-2">
                <p className="mb-3 font-bold text-white">Our Social Media</p>
                <div className="flex gap-3">
                  <SocialLink label="Facebook">
                    <IconFacebook />
                  </SocialLink>
                  <SocialLink label="Instagram">
                    <IconInstagram />
                  </SocialLink>
                  <SocialLink label="LinkedIn">
                    <IconLinkedIn />
                  </SocialLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold">{title}</h3>
      <ul className="space-y-2 text-sm text-white/80">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link href={link.href} className="inline-flex min-h-11 items-center hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Link
      href="/"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white hover:border-white"
    >
      {children}
    </Link>
  );
}
