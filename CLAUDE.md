# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

This is a Next.js 16 landing page for NauzyxLabs (an enterprise identity platform). It uses the App Router with client-side rendering for animations.

### Key Tech Stack

- **Next.js 16** with App Router (RSC enabled, but sections are client components)
- **React 19** with TypeScript
- **GSAP 3.14** + **@gsap/react** for scroll-linked animations and pinning
- **Framer Motion** for hover/tap/inView micro-interactions
- **Lenis** for smooth scrolling (synced with GSAP ScrollTrigger)
- **OGL** for WebGL shader backgrounds (Grainient component)
- **Tailwind CSS 4** + **shadcn/ui** (new-york style) for styling
- **Lucide React** for icons

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, Sora font setup
│   ├── page.tsx            # Main page: orchestrates all sections, GSAP/Lenis init
│   ├── globals.css         # Tailwind config, shadcn theme vars, custom animations
│   ├── _components/        # Page-level components (Navigation, Footer)
│   └── _sections/          # Landing page sections (Hero, Services, Clients, etc.)
├── components/             # Shared components (Grainient, Cursor, Logo, Preloader)
└── lib/
    └── utils.ts            # cn() utility (clsx + tailwind-merge)
```

### Animation Architecture

The page uses a **three-layer animation system**:

1. **Lenis** (smooth scroll): Initialized in `page.tsx`, synced with GSAP via `ScrollTrigger.update`
2. **GSAP ScrollTrigger** (scroll-linked): Used for parallax effects, pinning, and scrub animations
3. **Framer Motion** (viewport/hover): Used for reveal animations and micro-interactions

**Critical pattern**: `page.tsx` is the orchestrator. It:
- Initializes Lenis and syncs with GSAP
- Uses IntersectionObserver to toggle navigation visibility
- Runs entrance animations after preloader completes

### Section Patterns

- **HeroSection**: Full viewport with GSAP-pinned parallax, WebGL gradient background
- **ServicesSection**: 200vh scroll with GSAP pin, 5 cards converge to center on desktop, horizontal scroll on mobile
- **TestimonialsSection**: Framer Motion parallax background, staggered card reveals
- **Navigation**: Floating pill at bottom-center, shows/hides based on hero visibility

### Component Conventions

- All sections are `"use client"` components
- GSAP animations use `useGSAP` hook from `@gsap/react`
- ScrollTrigger is registered at module level: `gsap.registerPlugin(ScrollTrigger)`
- Remote images configured in `next.config.ts`: pravatar.cc, unsplash.com, framerusercontent.com
- CSS variable `--font-sora` is the primary font (applied via Next.js font optimization)

### Design System

The design follows a deep blue + teal color scheme documented in `DESIGN.md`. Key tokens:
- Hero gradient: `#1b3864` → `#1c4786` → `#3e99ab`
- Accent blue: `rgb(33, 127, 241)`
- Glass effects use `backdrop-blur-md` with `bg-white/90` (nav) or `bg-black/30` (testimonials)
- All buttons are pill-shaped (`rounded-full`)
- Section padding: `py-24 sm:py-32 px-4 sm:px-6 md:px-10`

### shadcn/ui Configuration

- Style: `new-york`
- CSS variables defined in `globals.css`
- Component aliases: `@/components/ui`, `@/lib/utils`
- External registries: `@react-bits`, `@aceternity`
