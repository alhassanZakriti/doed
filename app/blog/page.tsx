import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    href: "/about",
    image: "/images/about-hero.jpg",
    alt: "Diverse team brainstorming with sticky notes on glass",
    badge: "WIN-SOURCING",
    title: "Why Choose Win-Sourcing?",
    excerpt:
      "We don't believe in traditional outsourcing. We practice Win-Sourcing: a model where both parties win through synergy.",
  },
  {
    href: "/expertise",
    image: "/images/expertise-hero.jpg",
    alt: "Close-up of a hand typing on a computer keyboard",
    badge: "SOFTWARE & AI",
    title: "Case Highlight: Finance Engine",
    excerpt:
      "Implemented an LLM-powered document processing pipeline for an Amsterdam bank, reducing manual review time by 82%.",
  },
  {
    href: "/services",
    image: "/images/home-hero-right.jpg",
    alt: "Two people talking in a modern office hallway",
    badge: "CLOUD",
    title: "Cloud Infrastructure & Migration",
    excerpt:
      "Architecting cloud-native solutions that provide the resilience of an on-premise data center with the agility of the edge.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageIntro
        badge="INSIGHTS"
        title={
          <>
            Continuity, governance, and <span className="text-orange-500">high velocity.</span>
          </>
        }
        body="Briefings drawn from how we work — Dutch leadership, Moroccan engineering capacity, and institutional IT practice."
      />

      <section className="section-y">
        <div className="page-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} from="top" delay={index * 0.1}>
              <Link href={post.href} className="card-interactive block overflow-hidden rounded-card bg-white">
                <div className="relative h-48">
                  <Image src={post.image} alt={post.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
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
