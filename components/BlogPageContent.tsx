"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

const postHrefs = ["/about", "/expertise", "/services"];
const postImages = ["/images/about-hero.jpg", "/images/expertise-hero.jpg", "/images/home-hero-right.jpg"];

export function BlogPageContent() {
  const { t } = useLocale();
  const b = t.blog;

  return (
    <>
      <PageIntro
        badge={b.badge}
        title={
          <>
            {b.titleBefore} <span className="text-orange-500">{b.titleHighlight}</span>
          </>
        }
        body={b.intro}
      />

      <section className="section-y">
        <div className="page-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {b.posts.map((post, index) => (
            <Reveal key={post.title} from="top" delay={index * 0.1}>
              <Link
                href={postHrefs[index]}
                className="card-interactive block overflow-hidden rounded-card border border-line bg-surface"
              >
                <div className="relative h-48">
                  <Image
                    src={postImages[index]}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-500">{post.badge}</p>
                  <h2 className="mt-3 text-[21px] font-bold text-navy-text">{post.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-body">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
