# DOED website — session recap

This file records the work done in the Cursor session that took the `doed` Next.js app from a starter template to a multi-page marketing site. Specs came from `PROJECT_SPEC.md`, `.cursorrules`, and `ANIMATIONS.md`.

---

## Starting point

The `doed` folder was a default Next.js (App Router) + Tailwind v4 app. The build spec and Cursor rules lived in a sibling `files` / `files2` folder and were copied into this repo as the source of truth.

Rules applied throughout:

- Exact copy from `PROJECT_SPEC.md` where it exists; no invented Figma text.
- Shared components reused (Header, Footer, Button, Badge, ImageBlob, IconStatCard, TechPill, BulletListItem).
- No extra libraries unless asked.
- Open questions and `TODO-VERIFY` items (exact Figma tokens, missing captions, Expertise tabs, About card 3) were not guessed.

---

## 1. Design system and shared chrome

- **Tokens** in `app/globals.css`: navy, orange, blue-50, gray body, radii (estimated hex from the spec, still `TODO-VERIFY` vs Figma).
- **Font:** Inter via `next/font` (spec font was unverified).
- **Shared UI:** Header, Footer, Button (primary / outline / invert), Badge, ImageBlob, IconStatCard, TechPill, BulletListItem, circular DD/`PulseLogo` mark.
- **Routes first shipped:** `/` (Home), `/about`, `/expertise`.
- Starter dark-mode template was removed so the site matches the light marketing design.

---

## 2. Page content (from PROJECT_SPEC)

### Home

- Split-blob hero, Amsterdam overlay, trust copy, CTAs.
- Why Choose Win-Sourcing (bullets + synergy split images).
- From Concept to Implementation accordion (dark navy, spec copy including truncated lines).
- How We Collaborate stepper (later made interactive).
- Our Technologies row (later logos + carousel).
- Footer with wave, PulseLogo, columns from the spec.

### About

- Color-split hero, NL–Morocco indicator, Win-Sourcing cards (third “Strategic Governance” card **skipped** — identical copy, open question).
- Governance timeline + overlapping blobs.
- Orange CTA banner.

### Expertise

- Hero + Cloud Infrastructure cards + High-Velocity DevOps stats/pills.
- **Tab-switching section (§4.2) skipped** until open question #1 is decided.

---

## 3. Motion (`ANIMATIONS.md`)

Implemented without adding Framer Motion:

- **`PulseLogo`:** 3 white rings, `2.5s ease-out`, delays `0 / 0.8s / 1.6s`; hero loops on load; footer starts once in view.
- **Navbar:** white bar, navy text, soft shadow. (Assumed “header pulse” meant the **hero** logo, not the nav.)
- **Hero:** vertical `mask-image` fade on blob images; button entrance, hover text-swap, click arrow flash.
- **Scroll reveals:** IntersectionObserver (~25% visible, once); left/right for two-column blocks, from-top for stacks. Applied on Home, About, and Expertise.
- **Footer:** text fade and logo pulse start together.

Tweak after that: collaborate-stepper **orange** pulse rings, then a **top-to-bottom orange→transparent gradient** ring (border-color cannot be a gradient; implemented with a masked fill).

---

## 4. Images and logos

### Photos (`public/images/`)

Eight Unsplash photos **downloaded locally** (not hotlinked):

| File | Use |
|---|---|
| `home-hero-left.jpg` | Home hero left |
| `home-hero-right.jpg` | Home hero right |
| `home-synergy-left.jpg` | Moroccan Expertise |
| `home-synergy-right.jpg` | Dutch Leadership |
| `about-hero.jpg` | About hero |
| `about-governance-main.jpg` | Governance main |
| `about-governance-secondary.jpg` | Governance overlap |
| `expertise-hero.jpg` | Expertise hero |

`ImageBlob` takes `src` / `alt` and uses `next/image` `object-cover`. “AMSTERDAM INNOVATION HUB” is HTML overlay, not baked into the photo.

### First tech logos, then replacements

1. Eight **Simple Icons** SVGs (white on dark tiles), aligned to the Software & AI stack: .NET, Java (OpenJDK mark), PHP, Laravel, React, Angular, Vue.js, Node.js.
2. Later replaced by five Figma-export tiles in `public/logos/`:
   - `Rectangle.png` — Docker  
   - `Rectangle-1.png` — GitLab  
   - `Rectangle-2.png` — React  
   - `Rectangle-3.png` — triangle (labelled Vercel in code)  
   - `Rectangle-4.png` — Grafana  

---

## 5. Technologies carousel (`LogoCarousel`)

The static grid became an infinite strip:

- About **8 logos visible**; tiles sized to the viewport.
- Auto-scroll **left → right**, seamless wrap (duplicated track).
- If fewer than 8 unique marks, **pad/duplicate** until ≥ 8.
- **Drag** pauses autoplay; autoplay **resumes** after release.
- Edge **fade mask** so left/right logos are softer.

---

## 6. How We Collaborate stepper

`CollaborateStepper` (client):

- Only **one** active step: orange circle + rings; title (and caption if we have one) visible.
- Others navy; copy faded out with reserved height (no layout jump).
- Auto loop **1 → 5 → 1** (~4s).
- Click jumps to that step; the timer continues from there.
- Active step has the orange pulse rings.

**Still missing:** Figma captions for steps 1, 2, 4, 5. Only step 3 has spec copy: *“Assembly of the optimal solution and selection of the right Expert Squad.”*

---

## 7. Small fixes along the way

- Background `Image` on “From Concept to Implementation” required `alt=""` (decorative) and a `relative` section for `fill`.
- Consultation / pipeline / migration CTAs later pointed at `/contact` instead of `/`.

---

## 8. Rest of the site (Home as the design benchmark)

New routes, same tokens, Header/Footer, `Reveal` (with optional stagger delay), card hover, `Button` states, orange `CtaBanner`:

| Path | Page |
|---|---|
| `/services` | Services (5 domains from the Home accordion + Expertise copy) |
| `/tools` | Technologies carousel + software/DevOps pills |
| `/contact` | NL details + mailto consultation form |
| `/help` | FAQ from existing spec copy |
| `/privacy` | Privacy & Policy |
| `/terms` | Terms & Conditions |
| `/cookies` | Cookie Policy |
| `/blog` | Insight cards linking to About / Expertise / Services |
| `/portfolio` | Delivery highlights from spec case copy |

Header: **Services → `/services`**, **Tools → `/tools`**, About, Expertise.  
Footer: Home, Our services, Blog, Contact, Portfolio, Help, Privacy & Policy, Terms & Conditions, Cookie Policy.

---

## Shared files worth knowing

- `app/globals.css` — tokens, pulse, buttons, reveals, carousel, card hover
- `components/PulseLogo.tsx` — looping DD mark
- `components/LogoCarousel.tsx` — infinite logo strip
- `components/CollaborateStepper.tsx` — interactive timeline
- `components/Reveal.tsx` — scroll-in
- `components/CtaBanner.tsx` / `PageIntro.tsx` / `LegalSections.tsx` — page templates
- `components/ContactForm.tsx` — mailto form
- `app/page.tsx`, `app/about/page.tsx`, `app/expertise/page.tsx` — original three pages

---

## Still open / do not treat as finished polish

1. **Expertise pills:** tabs vs in-page anchors; Cyber Security / Managed Services / Support copy not in the captured spec.
2. **About card 3:** duplicate “Strategic Governance” — needs real copy or confirmation it is intentional.
3. **Home H1 color split:** still treated as all navy.
4. **Figma tokens:** hex, type sizes, radii, font family (`TODO-VERIFY`).
5. **Accordion / stepper:** truncated descriptions and missing captions 1, 2, 4, 5.
6. **Legal pages:** structured drafts using `contact@doed.ma`, Netherlands, and `+34 (690) 000-000` — **not a lawyer review**.
7. **Social URLs:** Facebook / Instagram / LinkedIn still have nowhere to go.
8. **Phone `+34` vs Netherlands positioning:** left as specified, may be wrong.
9. **Stock photos** are generic offices, not DOED’s actual NL/MA sites.
10. **Java** (when Simple Icons were used) was OpenJDK, not Oracle’s mark.

---

## How to run

```bash
pnpm dev
```

Open `http://localhost:3000`. Package manager is **pnpm**.
