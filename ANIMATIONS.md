# DOED Website — Animation Spec (Home Page Motion System)

Adds motion to the already-built static site. Follow this exactly — same rule as PROJECT_SPEC.md: no invented easing, timing, or extra flourishes beyond what's specified. If a value isn't given, use the default noted, don't improvise your own.

**Assumption made (flag if wrong):** "loop for both footer and header" in the brief refers to the **hero section** (which the brief also calls "the header section" earlier) and the **footer** — not the top navigation bar. The nav bar has no circular logo mark in the current design. If you actually want a pulsing circle logo added to the nav bar too, say so before this is built.

**Stack note:** written as framework-agnostic CSS/keyframe specs so it works whether the build is plain CSS/JS or React. Where Framer Motion has a meaningfully different idiom, it's noted as `[Framer Motion: ...]`.

---

## 1. Reusable Component: `PulseLogo`

Used in two places: hero center logo, footer logo. Same component, same animation, independent loop instances.

**Structure:**
- A white circle (`background: white; border-radius: 50%`) containing the DOED "DD" icon mark, centered.
- 2–3 ring elements, same circle shape, positioned absolutely behind/around the logo circle, each with `border: 2px solid white; border-radius: 50%; background: transparent`.

**Ring animation (per ring):**
- Start state: `scale(1)`, `opacity: 0.6`
- End state: `scale(3)` (300% of the circle's own size), `opacity: 0`
- Duration: `2.5s`
- Easing: `ease-out`
- Iteration: infinite loop
- Stagger: with 3 rings, offset each ring's `animation-delay` by `~0.8s` (ring 2 starts 0.8s after ring 1, ring 3 starts 1.6s after ring 1) so pulses emit continuously rather than all firing in unison.

```css
@keyframes pulse-ring {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(3);   opacity: 0; }
}
.pulse-ring {
  animation: pulse-ring 2.5s ease-out infinite;
}
.pulse-ring:nth-child(2) { animation-delay: 0.8s; }
.pulse-ring:nth-child(3) { animation-delay: 1.6s; }
```

`[Framer Motion: animate={{ scale: 3, opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: i * 0.8 }}]`

- Trigger: hero instance runs on page load. Footer instance starts when the footer scrolls into view (see §4), and keeps looping continuously once started — it doesn't need to re-trigger on every scroll into view, just start once and loop forever.

---

## 2. Navbar

- Background: white (`--color-white`)
- Text color: navy (`--color-navy-900` token from PROJECT_SPEC.md)
- Box-shadow: soft, not sharp. Default values (adjust later to taste):
  ```css
  box-shadow: 0 4px 12px rgba(14, 42, 69, 0.05); /* rgba = navy token at 5% opacity */
  ```
- No motion on the navbar itself unless you add sticky-scroll behavior later — not in scope here, don't add it unassisted.

---

## 3. Hero Section

### 3.1 Split images
- Existing left/right mirrored "D" blob images stay as built.
- Add: vertical opacity gradient on each image — fully opaque at top, fully transparent at bottom.
- Implementation: use `mask-image` (true alpha fade, reveals whatever is behind — page background) rather than a solid-color overlay, since a color overlay would tint the image instead of fading it:
  ```css
  .hero-image {
    mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  }
  ```
- If the actual visual result should stop fading before fully invisible (e.g. fade to 20% not 0%), adjust the gradient stop — but default to full fade per the brief ("0% at bottom").

### 3.2 Logo (z-axis above images)
- `PulseLogo` component (§1), absolutely positioned, centered over the seam where the two images meet, `z-index` above both images.
- Runs on page load, loops infinitely (per §1).

### 3.3 Badge (orange tag)
- Positioned below the logo. No animation specified in the brief beyond what's described for the buttons — leave static for now. If you'd like it included in the same entrance sequence as the buttons (§3.4), say so; not assumed here.

### 3.4 Buttons — three separate animations

**a) Entrance (on page load):**
- Button container: `opacity: 0 → 1`, `translateY: -20px → 0`
- Duration: `0.5s`, easing: `ease-out`
- Stagger: button 2 starts `0.15s` after button 1
- Text label inside each button: fades in `~0.1–0.15s` after its own button container starts (nested delay), so the shape leads and the label trails slightly.

```css
@keyframes btn-fade-in {
  0%   { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.btn-1 { animation: btn-fade-in 0.5s ease-out both; }
.btn-2 { animation: btn-fade-in 0.5s ease-out 0.15s both; }
.btn-label { animation: fade-in 0.4s ease-out 0.1s both; } /* nested, relative to parent */
```

**b) Hover — text slides top-to-bottom:**
- Classic stacked-text swap. Two identical text spans inside a `overflow: hidden` wrapper the height of one line.
- Default: span A at `translateY(0)` (visible), span B at `translateY(-100%)` (sitting above, hidden).
- On hover: wrapper (or both spans together) translate down by `100%`, so span A exits downward out of view and span B enters from above into view — motion reads as "text coming from top to bottom."
- Duration: `0.3s`, easing: `ease`.

```html
<button class="btn">
  <span class="btn-text-wrap">
    <span class="btn-text">Explore Our Expertise</span>
    <span class="btn-text">Explore Our Expertise</span>
  </span>
</button>
```
```css
.btn-text-wrap { overflow: hidden; height: 1.2em; position: relative; }
.btn-text { display: block; transition: transform 0.3s ease; }
.btn-text:nth-child(2) { position: absolute; top: -100%; }
.btn:hover .btn-text:nth-child(1) { transform: translateY(100%); }
.btn:hover .btn-text:nth-child(2) { transform: translateY(100%); }
```

**c) Click — arrow flash:**
- On click, an arrow icon appears at the right edge of the button's text, inside the button, then disappears immediately after.
- Sequence: arrow `opacity: 0 → 1` over `0.15s`, brief hold (`~150ms`), then `opacity: 1 → 0` over `0.15s`. Total round trip ~450–500ms.
- Does not block or delay the button's actual click action (navigation/form submit fires normally; this is a decorative overlay, not a gate).
- Trigger: `onClick` event, not hover.

---

## 4. Scroll-Triggered Section Reveals (sitewide pattern — confirm scope)

The brief describes this under "Home page" — **confirm whether this reveal pattern should also apply to the About and Expertise pages**, since they share the same section types (two-column layouts, vertical stacks). Assuming yes for consistency unless told otherwise, since a site where only one page animates and others don't would feel inconsistent.

**Rule:**
- **Two-column sections** (content split left/right — e.g. "Why Choose Win-Sourcing," "Governance Structure"): left-side content fades in from the left, right-side content fades in from the right.
  ```css
  @keyframes fade-in-left  { 0% { opacity: 0; transform: translateX(-40px); } 100% { opacity: 1; transform: translateX(0); } }
  @keyframes fade-in-right { 0% { opacity: 0; transform: translateX(40px); }  100% { opacity: 1; transform: translateX(0); } }
  ```
- **Vertically-stacked sections** (single column, elements stacked top to bottom — e.g. "How We Collaborate" stepper row, "Our Technologies" logo row, footer columns): each element fades in from `opacity: 0 → 1` with a slight upward motion, `translateY: -20px → 0`.
  ```css
  @keyframes fade-in-top { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
  ```
- Duration: `0.5–0.6s`, easing: `ease-out`, consistent across all reveals.
- Trigger: `IntersectionObserver` (or scroll-linked equivalent), fires once when ~20–30% of the element is visible, does not repeat on scroll back up/down.
- Optional (confirm before adding): stagger children within a vertical section by `~0.1s` each for a cascading effect, rather than all firing simultaneously. Not required by the brief — flagging as a nice-to-have, not building it in by default.

---

## 5. Footer

- Logo: same `PulseLogo` instance as hero (§1), infinite loop, starts once when footer scrolls into view.
- Footer text (nav columns, tagline, contact block): fades in from top (`opacity: 0 → 1`, `translateY: -20px → 0`), triggered **at the same time** as the logo pulse starts — both begin together on scroll-into-view, not staggered relative to each other.

---

## Build Order

1. `PulseLogo` component first — build and verify it in isolation before wiring into hero/footer.
2. Navbar styling (simple, no dependencies).
3. Hero: image mask fade → logo placement → badge (unchanged) → button entrance → button hover → button click flash. One at a time, review each before the next.
4. Scroll-reveal system (`IntersectionObserver` hook/utility) — build once, apply to sections.
5. Footer: wire `PulseLogo` + text fade using the scroll-reveal trigger from step 4.

Don't parallelize steps 3–5 in one prompt — implement and review each in its own pass, same as PROJECT_SPEC.md's build order.
