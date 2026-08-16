# DOED Website — Build Spec

**Purpose of this file:** This is the single source of truth for the AI coding agent (Cursor). Every page, component, copy string, and interaction described here must be implemented exactly as written. If something is ambiguous or not covered here, STOP and ask — do not invent, restyle, or add anything not listed.

Values marked `TODO-VERIFY` were estimated from screenshots and must be replaced with exact values pulled from Figma Dev Mode (Inspect panel → hex, px, font weight) before final polish. Everything else (copy, structure, layout order, states) is final.

---

## 0. Open Questions (resolve before building — do not guess)

1. **Expertise page tab behavior:** The page has 6 category pills (Software & AI, Cloud Architecture, DevOps, Cyber Security, Managed Services, Support). Only "Software & AI" is shown active/expanded, followed by two more full sections ("Cloud Infrastructure & Migration", "High-Velocity DevOps") that appear to be static sections below, not tied to the tab state. But there's no visible content for Cyber Security, Managed Services, or Support.
   → **Decide:** Are the pills (a) real tabs that swap the content block below them, with Cloud/DevOps as always-visible static sections underneath, or (b) anchor links that scroll down to matching sections (meaning Cyber Security/Managed Services/Support sections exist further down and weren't captured in the screenshot)?
   → Tell the agent explicitly which one before this page is built.

2. **About page — "Win-Sourcing Advantage" 3-card row:** The left card and right card ("Strategic Governance") have **identical copy** in the design. This is either a placeholder duplication (needs real distinct content for the 2nd card) or intentional. Confirm which — if placeholder, supply the correct copy before build.

3. **Home page hero heading color split:** confirm which words in "Your Dedicated Contact Point in the Netherlands." are orange vs navy — appears to be all navy, no orange span (unlike the Expertise and About hero headings, which do split colors). Verify in Figma.

---

## 1. Global Design System

### 1.1 Color Tokens (`TODO-VERIFY` exact hex in Figma, values below are close estimates)

| Token | Approx Hex | Usage |
|---|---|---|
| `--color-navy-900` | `#0E2A45` `TODO-VERIFY` | Header/footer dark backgrounds, dark cards, heading text |
| `--color-navy-text` | `#0E2A45` `TODO-VERIFY` | Primary heading text color |
| `--color-orange-500` | `#F5850F` `TODO-VERIFY` | Primary accent — buttons, active nav, highlighted heading words, icons/dots |
| `--color-orange-50` | `#FDEBD8` `TODO-VERIFY` | Badge pill backgrounds, "Tech Stack" card background |
| `--color-blue-50` | `#E7EEF3` `TODO-VERIFY` | Light section backgrounds, "Capabilities" card, "Strategic Governance" cards |
| `--color-gray-body` | `#5C6B78` `TODO-VERIFY` | Paragraph/body text |
| `--color-white` | `#FFFFFF` | Text on dark backgrounds, card backgrounds |
| `--color-border-orange` | orange at reduced opacity `TODO-VERIFY` | Card outlines (Cloud Infra cards), image blob borders |

### 1.2 Typography

- Font family: `TODO-VERIFY` (looks like a geometric sans — e.g. Inter, Poppins, or similar; check Figma text styles)
- H1 (hero headings): bold, ~48–56px, tight line-height
- H2 (section headings): bold, ~32–36px
- H3 (card headings): semibold/bold, ~20–22px
- Body: regular, ~16px, `--color-gray-body`
- Eyebrow/badge labels: bold, small (~12px), letter-spaced, uppercase
- Stat numbers ("99.99%", "15min"): extra-bold, ~40–48px

### 1.3 Shape Language

- Signature "blob" image container: large asymmetric border-radius (one or two corners rounded into a full arc, opposite corners square) — appears on every page's hero image and multiple content images. Implement as one reusable `ImageBlob` component with a `direction` prop (`top-right`, `top-left`, etc.) rather than rebuilding per page.
- Thin orange border (~2–3px) around blob images.
- Cards: consistently rounded corners (~16–24px radius).
- Buttons: pill/rounded rectangle, ~8px radius `TODO-VERIFY`.

### 1.4 Reusable Components (build once, reuse everywhere)

- **Header/Nav** — identical across all 3 pages. Logo "DOED" left, nav links (Services, About, Expertise, Tools) right, active link colored orange. No "Home" nav item — logo click routes to home.
- **Footer** — identical across all 3 pages. See §1.5.
- **Badge/Eyebrow pill** — small rounded pill, orange-50 background, orange bold uppercase text. Used above every hero heading.
- **Button — Primary** — solid orange background, white text, bold.
- **Button — Secondary/Outline** — transparent or white background, orange or white border + text depending on context (on dark/orange backgrounds it inverts to white outline).
- **ImageBlob** — see §1.3.
- **IconStatCard** — icon + heading + paragraph, used in "Cloud Infrastructure" 4-card grid and elsewhere.
- **TechPill** — small rounded rectangle, muted background, used for tech stack lists.
- **BulletListItem** — orange dot + bold label + description text, reused on About (Win-Sourcing Advantage bullets), Home (Why Choose Win-Sourcing bullets), About (Governance Structure timeline).

### 1.5 Footer (exact copy — identical on all pages)

```
[Circular icon: white circle, orange "DD" mark]
DOED
CONTINUITY IS KEY   ← letter-spaced uppercase

Sections            Help Center            Informations
Home                Contact                Netherlands
Our services        Help                   +34 (690) 000-000
Blog                Privacy & Policy       contact@doed.ma
Contact             Terms & Conditions     Our Social Media
Portfolio                                  [Facebook] [Instagram] [LinkedIn]
```
Background: dark navy, top edge has a wave/curve shape cutting into the section above it. Circular logo mark sits centered, overlapping the wave.

---

## 2. Page: Home (`home.png`)

### 2.1 Hero
- Header (shared component)
- Split-image hero: two ImageBlob images side by side, meeting in the middle. Left image has overlay text "AMSTERDAM INNOVATION HUB" (small badge/label in top-left of image). White circular badge overlapping the seam between the two images, containing the orange "DD" icon mark.
- Below images, centered:
  - Badge: `EXPERIENCE YOU CAN TRUST.`
  - H1 (centered): `Your Dedicated Contact Point in the Netherlands.`
  - Body paragraph (centered, max-width constrained):
    > At DOED, continuity is key. Throughout your project, you will have one dedicated contact person in the Netherlands acting as your project manager and quality assurance lead. With decades of IT experience, we guide your projects from the initial concept to final delivery. Behind this local governance stands a team of over 20 highly qualified IT engineers in Morocco. This hybrid structure allows us to scale rapidly without compromising on quality or communication.
  - Two buttons, centered, side by side: `Explore Our Expertise` (primary orange), `Book a Consultation` (outline)
- Divider line

### 2.2 Why Choose Win-Sourcing
- H2 centered: `Why Choose Win-Sourcing?`
- Subtext centered: `We don't believe in traditional outsourcing. We practice Win-Sourcing: a model where both parties win through synergy.`
- Two-column layout:
  - **Left:** 4 bullet items (orange dot, bold label + description, same line):
    1. **Dutch Project Leadership:** Your business context is understood and protected in your own language and time zone.
    2. **International Capacity:** Direct access to a pool of top-tier engineers without long recruitment processes.
    3. **Expert Squads:** We assemble teams that have already developed synergy, minimizing onboarding time.
    4. **Optimal Value Engineering:** High-end engineering at an attractive rate, without losing control.
  - **Right:** Split-image card, two photos side by side with colored border accents (green on left photo edge, red on right photo edge — `TODO-VERIFY` exact colors/meaning), center label "Synergy" in a pill/badge over the seam, bottom captions "Moroccan Expertise" (left) and "Dutch Leadership" (right) overlaid on the images.

### 2.3 From Concept to Implementation
- Light blue-gray full-width section
- H2 centered: `From Concept to Implementation`
- Subtext centered: `We deliver functional teams and solutions, not just individual contractors.`
- Dark navy rounded container holding a 2-column accordion/expandable list:
  - Software Development & AI — expanded by default, shows description: "Custom software, web applications, and intelligent automation. From API integrations to full SaaS platforms and AI implementations (LLM/RAG). Tech: .NET · Java · PHP · Laravel · React · Angular · Vue.js · Node.js"
  - DevOps & Automation — description visible: "Accelerating time-to-market through automation…" (truncated in design — get full copy from Figma)
  - Cloud & Infrastructure — collapsed, header only: "Secure, scalable, and stable IT foundations. Design…" (truncated)
  - Cybersecurity & Risk Management — collapsed: "Protection against digital threats and compliance…" (truncated)
  - IT Support & Helpdesk — collapsed, no description visible in screenshot
  - Each row has an icon, title, and chevron (expand/collapse indicator)
  - **Note:** several descriptions are truncated with "…" in the screenshot — pull full text from Figma, don't invent endings.

### 2.4 How We Collaborate
- H2 centered: `How We Collaborate?`
- Subtext centered: `From the first meeting to the final result.`
- 5-step horizontal stepper, numbered circles 1–5, step 3 is visually emphasized (larger, orange, with concentric ring decoration) representing the "current/featured" step:
  1. DISCOVERY
  2. ANALYSIS
  3. STRATEGY & DESIGN (emphasized) — caption: "Assembly of the optimal solution and selection of the right Expert Squad."
  4. IMPLEMENTATION
  5. MANAGEMENT & OPTIMIZATION
  - Captions for steps 1, 2, 4, 5 are present but faded/muted in the design (small gray text below each) — get exact copy from Figma, don't guess.

### 2.5 Our Technologies
- H2 centered: `Our Technologies`
- Subtext centered: `We broaden your field of vision with the technologies we use`
- Row of 8 square icon tiles (dark rounded squares) containing tech/tool logos — identify exact logos from Figma (icons are too small/generic in screenshot to identify reliably).

### 2.6 Footer (shared component, §1.5)

---

## 3. Page: About (`About.png`)

### 3.1 Hero
- Header (shared, "About" nav item active/orange)
- Badge: `WIN-SOURCING PHILOSOPHY`
- H1, two lines, color split:
  - Line 1 (navy): `The Global Bridge for`
  - Line 2 (orange): `IT Governance.`
- Body paragraph:
  > At DOED.nl, we redefine engineering capacity. By combining Dutch project leadership with Morocco's elite technical infrastructure, we deliver scalable solutions with absolute executive clarity.
- Inline indicator row: flag icon + "Netherlands" — horizontal line — network/node icon + "Morocco"
- Right: ImageBlob (office image, people at standing desks with sticky notes/whiteboard)
- Divider

### 3.2 The Win-Sourcing Advantage
- H2 centered: `The Win-Sourcing Advantage`
- Subtext centered: `Our hybrid model ensures the agility of remote engineering without sacrificing the governance and compliance of local leadership.`
- 3-card row:
  - **Card 1 — "Strategic Governance"** (light blue bg): "Local Dutch leadership handles the heavy lifting of project management, compliance, and strategic alignment with your business goals." Bullets: GDPR & ISO Compliance / On-site Consultation / Contractual Security
  - **Card 2 — "Seamless Synergy"** (dark navy bg, center card, icon of two looping arrows): "Real-time collaboration across borders, powered by standardized DevOps protocols."
  - **Card 3 — "Strategic Governance"** — ⚠️ identical to Card 1 in current design (see Open Question #2). Do not build until resolved.

### 3.3 Governance Structure
- Light blue-gray full-width section
- H2 centered: `Governance Structure`
- Left: vertical timeline (orange dots connected by a vertical line), 3 items:
  1. **Discovery & Framing** — Based in Amsterdam. We define the project parameters, legal framework, and security requirements to ensure full alignment with EU standards.
  2. **Team Assembly** — Hybrid formation. We select senior Dutch leads and expert Moroccan engineers to form a unified squad with shared cultural values.
  3. **Continuous Delivery** — Governed by NL. Executed by MA. Weekly steering committees ensure transparency, while the dev hub maintains high-velocity output.
- Right: two overlapping ImageBlob photos (larger meeting-room photo behind, smaller open-office photo overlapping bottom-right), both orange-bordered.

### 3.4 CTA Banner
- Full-width, solid orange rounded container
- H2 centered, white: `Ready to Scale with Certainty?`
- Paragraph centered, white: `Experience the power of the Win-Sourcing model. Let's build your next-generation infrastructure together.`
- Two buttons centered: `Explore Our Expertise` (white filled, orange text), `Book a Consultation` (white outline, white text)

### 3.5 Footer (shared component, §1.5)

---

## 4. Page: Expertise (`Expertise.png`)

⚠️ Do not build the tab-switching section (§4.2) until Open Question #1 is resolved.

### 4.1 Hero
- Header (shared, "Expertise" nav item active/orange)
- Badge: `INSTITUTIONAL EXCELLENCE`
- H1, single line, color split: `Our Domain ` (navy) + `Expertise.` (orange)
- Body paragraph:
  > Bridging the gap between complex architectural challenges and executive operational clarity. We deploy high-velocity IT infrastructure that scales with your ambition.
- Link with flag icon: `Explore Capabilities` (underlined text link, not a button)
- Right: ImageBlob (hands typing on laptop/phone at desk)

### 4.2 Category Tab Bar + Software & AI Content
- Light blue-gray full-width section
- Pill tab bar, 6 items (first is active/selected — white bg, orange text and icon, underline accent below):
  1. SOFTWARE & AI (active) — icon: code/monitor
  2. CLOUD ARCHITECTURE — icon: cloud
  3. DEVOPS — icon: refresh/cycle arrows
  4. CYBER SECURITY — icon: shield
  5. MANAGED SERVICES — icon: search/magnifier
  6. SUPPORT — icon: headset
- "Our Social Media" label appears floating top-right of this section in the screenshot — likely a stray/misplaced element from another component; verify in Figma whether this belongs here or is a layer bleed-through error.
- Content block for active tab (Software & AI):
  - H2: `Software Engineering & AI`
  - Paragraph: "We engineer bespoke software ecosystems that leverage predictive analytics and generative AI to automate complex decision-making processes. Our code is built for endurance and high-transaction environments."
  - Callout box (left orange/blue border accent): **Case Highlight: Finance Engine** — "Implemented an LLM-powered document processing pipeline for an Amsterdam bank, reducing manual review time by 82%."
  - Two cards side by side:
    - **Tech Stack** (orange-50 bg, code icon): pills — Python / PyTorch, Go, PostgreSQL, React / Next.js, Node.js (TypeScript)
    - **Capabilities** (blue-50 bg, bar-chart icon): bullet list (orange dots) — Custom CRM/ERP, LLM Fine-tuning, Microservices Architectures, Legacy Refactoring
  - Centered button: `Start Your AI Project` (primary orange)
- Divider

### 4.3 Cloud Infrastructure & Migration
- H2 (left): `Cloud Infrastructure & Migration`
- Paragraph: "Architecting cloud-native solutions that provide the resilience of an on-premise data center with the agility of the edge. We specialize in hybrid and multi-cloud strategies."
- Link with arrow: `Download Migration Guide →`
- Right: 2×2 grid of IconStatCards (white bg, orange border, rounded):
  1. **AWS & Azure Experts** — "Enterprise-grade deployments featuring automated scaling and cost-optimized compute cycles."
  2. **Hybrid Cloud** — "Bridging legacy hardware with modern cloud services via secure, low-latency interconnects."
  3. **Cloud Governance** — "Compliance-first monitoring ensuring your cloud assets meet GDPR and ISO standards at all times."
  4. **Serverless Ops** — "Zero-management infrastructure designed for event-driven applications and massive throughput."

### 4.4 High-Velocity DevOps
- Full-width dark navy rounded container
- H2: `High-Velocity ` (white) + `DevOps` (orange)
- Paragraph (white/light gray): "We dissolve the silos between development and operations. By automating the entire delivery pipeline, we enable your team to ship code daily with zero downtime."
- Two large stats side by side: `99.99%` / `UPTIME AVERAGE` and `15min` / `MEAN TIME TO RECOVERY`
- Right side: tech pills in 3 rows of 2 — Kubernetes, Docker, Datadog, Terraform, Ansible, Jenkins, GitHub Actions (7 items — last row has 1)
- Button: `Request Pipeline Audit` (primary orange)

### 4.5 Footer (shared component, §1.5)

---

## 5. Build Order (recommended)

1. Design tokens + global CSS/Tailwind config (colors, type scale, radii) — pull exact values from Figma first.
2. Shared components: Header, Footer, Button (primary/outline), Badge, ImageBlob, IconStatCard, TechPill, BulletListItem.
3. Home page, section by section, in the order listed in §2.
4. About page, section by section (§3) — skip §3.2 Card 3 until Open Question #2 is resolved.
5. Expertise page — skip §4.2 tab-switching logic until Open Question #1 is resolved.

Build and review **one section at a time**. Do not proceed to the next section until the current one is confirmed correct.
