# NauzyxLabs Landing — Design System

## Brand Identity

NauzyxLabs is a digital product studio. The landing page communicates trust, technical sophistication, and modern enterprise readiness. The visual language uses deep blues paired with clean whites and subtle grain textures.

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--hero-deep` | `#1b3864` | Hero gradient start (darkest blue) |
| `--hero-mid` | `#1c4786` | Hero gradient middle |
| `--hero-teal` | `#3e99ab` | Hero gradient end (teal accent) |
| `--accent-blue` | `rgb(33,127,241)` | Primary accent — badges, borders, CTAs, section headings |
| `--ink-dark` | `#1f2b38` | Dark text on light backgrounds |
| `--ink` | `#111827` | Body text (gray-900) |

### Neutral Colors

| Token | Tailwind | Usage |
|-------|----------|-------|
| `--body` | `gray-700` | Secondary text |
| `--mute` | `gray-500` | Tertiary text, descriptions |
| `--faint` | `gray-400` | Timestamps, metadata |
| `--surface` | `#f3f6fb` | Service card backgrounds |
| `--surface-alt` | `gray-50` | Section alternating backgrounds |
| `--bg` | `white` | Primary background |
| `--border` | `gray-200` | Default borders |

### Hero Gradient

The hero uses an OGL WebGL shader (`Grainient` component) with three blended colors:

```
color1="#1b3864"   → Deep navy
color2="#1c4786"   → Royal blue
color3="#3e99ab"   → Teal
```

Shader parameters: `warpStrength=2.25`, `warpFrequency=8.1`, `blendAngle=48`, `grainAmount=0.05`, `contrast=1.5`, `saturation=0.8`

### Glass Effects

```css
/* Navigation pill */
bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]

/* Testimonial cards — dark glass */
bg-black/30 backdrop-blur-md border border-white/10

/* Testimonial cards — light (highlighted) */
bg-white shadow-lg
```

## Typography

### Font Family

**Sora** (Google Fonts) — geometric sans-serif with a technical feel. Applied via Next.js font optimization:

```tsx
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });
```

CSS variable: `--font-sora` → applied to `--font-sans`, `--font-display`, `body`, `h1-h6`

### Type Scale

| Style | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| Display XL | `text-7xl` (72px) | `font-medium` | `tracking-tight` | Hero headline (desktop) |
| Display LG | `text-5xl`–`text-6xl` | `font-medium` | `tracking-tight` | Section headings |
| Display MD | `text-4xl` | `font-medium` | `tracking-tight` | Subsection headings |
| Heading | `text-xl`–`text-2xl` | `font-semibold` | — | Card titles |
| Body LG | `text-base`–`text-lg` | `font-medium` | — | Navigation, CTAs |
| Body | `text-sm`–`text-base` | `font-normal` | — | Body copy, descriptions |
| Caption | `text-xs` | `font-bold` | `tracking-[0.25em]` | Eyebrow labels (uppercase) |
| Small | `text-xs` | — | — | Metadata, timestamps |

### Responsive Breakpoints

| Breakpoint | Width | Hero Text | Section Headings |
|-----------|-------|-----------|-----------------|
| Mobile | `<640px` | `text-3xl` | `text-4xl` |
| Tablet | `640px–767px` | `text-5xl` | `text-4xl` |
| Desktop | `768px–1023px` | `text-6xl` | `text-5xl` |
| Wide | `≥1024px` | `text-7xl` | `text-6xl`–`text-7xl` |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section padding Y | `py-24 sm:py-32` | Standard section vertical padding |
| Section padding X | `px-4 sm:px-6 md:px-10` | Horizontal padding (responsive) |
| Container max | `max-w-7xl` (80rem) | Main content container |
| Card padding | `p-6 sm:p-8` | Client/feature cards |
| Gap (grid) | `gap-4`–`gap-8` | Grid and flex gaps |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| Section | `rounded-t-[3rem]`, `rounded-[2.5rem]` | Large section containers |
| Card | `rounded-2xl`–`rounded-3xl` | Content cards |
| Service card | `rounded-[26px]` | Service cards with image |
| Image | `rounded-4xl` | Inner image containers |
| Button | `rounded-full` | All buttons are pill-shaped |
| Badge | `rounded-full` | Badges and tags |
| Avatar | `rounded-full` | Profile images |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| Card | `shadow-lg` | Elevated cards |
| Float | `shadow-xl` | Floating elements |
| Nav | `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` | Navigation pill |
| Button glow | `boxShadow: rgba(33,127,241,0.2) 0px 2px 8px 0px` | Service icon badges |

## Component Patterns

### Navigation

- **Desktop**: Floating pill at bottom-center, glass effect, shows on scroll down
- **Mobile**: Compact pill with hamburger menu, popup menu overlay
- Logo + nav links + "Get started" CTA button
- Transitions: `opacity-100 translate-y-0` ↔ `opacity-0 translate-y-8 pointer-events-none`

### Hero Section

- Full viewport height (`h-screen`) with parallax scroll
- WebGL gradient background (Grainient component) with parallax
- Content: eyebrow label → headline → description → CTAs → avatar group
- Layout: stacked on mobile, side-by-side on desktop (avatar left, description right)
- Mouse scroll indicator at bottom center

### Services Section (Pinned)

- `300vh` scroll distance with GSAP pin
- 5 service cards positioned absolutely in corners
- Cards converge to center as user scrolls (scrub animation)
- Title text scales and fades during convergence
- Cards pulse at full convergence to signal completion

### Clients Section

- Grid of client logos (2 cols mobile, 4 cols desktop)
- Blue themed heading with badge
- Framer Motion staggered reveal on scroll

### Projects Section

- 2-column grid of project cards
- Image with hover zoom + overlay
- Title, category, year metadata
- Gray-50 alternating background

### Testimonials Section

- Parallax background image (mountains)
- 3-column grid of glass cards
- Highlighted card (white bg) among dark glass cards
- Avatar, name, role, star rating per card

### Footer

- Simple horizontal layout: logo, nav links, copyright
- Gray-50 background
- Responsive: stacked on mobile, row on desktop

## Animation Patterns

### GSAP

- **ScrollTrigger pinning**: Hero parallax, Services convergence
- **Scrub**: `scrub: 1.5` for smooth scroll-linked animations
- **Timeline stagger**: `stagger: 0.12` for sequential reveals
- **Easings**: `power2.out`, `power3.out`, `back.out`, `power1.inOut`

### Framer Motion

- **Hover**: `whileHover={{ scale: 1.02, y: -1 }}`
- **Tap**: `whileTap={{ scale: 0.98 }}`
- **InView**: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`

### Lenis

- Smooth scroll with `duration: 1.2`, `smoothWheel: true`
- Integrated with GSAP ScrollTrigger via `requestAnimationFrame`

## Assets

| Asset | Path | Usage |
|-------|------|-------|
| Logo (colored) | `/logo_colored.svg` | Footer |
| Logo (white) | `/logo_white.svg` | Testimonials |
| Grainient component | `@/components/Grainient` | Hero WebGL background |
| Cursor component | `@/components/Cursor` | Custom cursor (desktop) |
| Preloader | `@/components/Preloader` | Loading animation |

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.1.6 | Framework |
| React | 19.2.3 | UI library |
| GSAP | 3.14.2 | Scroll animations, pinning |
| @gsap/react | 2.1.2 | `useGSAP` hook |
| Framer Motion | 12.34.3 | Hover/tap/inView animations |
| Lenis | 1.3.17 | Smooth scrolling |
| OGL | 1.0.11 | WebGL shader (Grainient) |
| Tailwind CSS | 4 | Utility-first styling |
| Radix UI | 1.4.3 | Accessible primitives |
| Lucide React | 0.575.0 | Icons |
