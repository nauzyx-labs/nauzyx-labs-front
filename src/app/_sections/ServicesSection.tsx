"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, Bot, LayoutGrid, Server, Zap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "chatbots",
    title: "Chatbots",
    icon: Bot,
    image:
      "https://framerusercontent.com/images/vLGZ7zrhEIqoSQ0lvhS8aCFwHw.jpg?width=410&height=326",
  },
  {
    id: "ai-reports",
    title: "AI Reports",
    icon: BarChart3,
    image:
      "https://framerusercontent.com/images/I0WkDdBbRV8BJg0aAxZyyn8Ka4.jpg?width=410&height=326",
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: LayoutGrid,
    image:
      "https://framerusercontent.com/images/YSybZkqkAcjWEoOf9ur8tRKiE.jpg?width=410&height=326",
  },
  {
    id: "automation",
    title: "Automation",
    icon: Zap,
    image:
      "https://framerusercontent.com/images/SlNqGUqwLH7j93oGQqw6qf1rzA.jpg?width=410&height=326",
  },
  {
    id: "systems",
    title: "Systems",
    icon: Server,
    image:
      "https://framerusercontent.com/images/7hu04KS49K7SuKEa8fyKrGSg.jpg?width=410&height=326",
  },
];

const CARD_POSITIONS = [
  { top: "8%", left: "2%" },
  { top: "42%", left: "0%" },
  { top: "6%", right: "2%" },
  { top: "50%", right: "2%" },
  { bottom: "4%", left: "35%" },
];

function ServiceCard({
  title,
  icon: Icon,
  image,
}: {
  readonly title: string;
  readonly icon: React.ElementType;
  readonly image: string;
}) {
  return (
    <div className="w-full max-w-[220px] rounded-[26px] bg-[#f3f6fb] overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 pt-4 pb-3">
        <div
          className="w-7 h-7 rounded-[6px] flex items-center justify-center shrink-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(33,127,241) 0%, rgb(31,43,56) 100%)",
            boxShadow: "rgba(33,127,241,0.2) 0px 2px 8px 0px",
          }}
        >
          <Icon className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-[15px] font-semibold text-[#1f2b38]">
          {title}
        </span>
      </div>
      <div className="mx-3 mb-3 rounded-4xl overflow-hidden aspect-4/3">
        <Image
          src={image}
          alt={title}
          width={410}
          height={326}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (!el) return;
    cardsRef.current[index] = el;
  };

  const setPathRef = (el: SVGPathElement | null, index: number) => {
    if (!el) return;
    pathsRef.current[index] = el;
  };

  useGSAP(
    () => {
      if (!containerRef.current || !sectionRef.current || !svgRef.current) return;

      const mql = window.matchMedia("(min-width: 768px)");
      if (!mql.matches) return;

      const container = containerRef.current;
      const cards = cardsRef.current.filter(Boolean);
      const paths = pathsRef.current.filter(Boolean);

      const updatePaths = () => {
        if (!svgRef.current) return;
        const svgEl = svgRef.current;
        const svgRect = svgEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Center of container relative to SVG
        const cx = containerRect.left + containerRect.width / 2 - svgRect.left;
        const cy = containerRect.top + containerRect.height / 2 - svgRect.top;

        const gradients = svgEl.querySelectorAll("linearGradient");

        cards.forEach((card, i) => {
          if (!paths[i]) return;
          const cardRect = card.getBoundingClientRect();
          const cardCx = cardRect.left + cardRect.width / 2 - svgRect.left;
          const cardCy = cardRect.top + cardRect.height / 2 - svgRect.top;

          // Skip if positions are off-screen (fast scroll artifact)
          if (Math.abs(cardCx) > 3000 || Math.abs(cardCy) > 3000) return;

          const midX = (cx + cardCx) / 2;
          const midY = (cy + cardCy) / 2;
          const dx = cardCx - cx;
          const dy = cardCy - cy;
          const perpX = -dy * 0.15;
          const perpY = dx * 0.15;

          paths[i].setAttribute(
            "d",
            `M ${cx} ${cy} Q ${midX + perpX} ${midY + perpY} ${cardCx} ${cardCy}`,
          );

          if (gradients[i]) {
            gradients[i].setAttribute("x1", String(cx));
            gradients[i].setAttribute("y1", String(cy));
            gradients[i].setAttribute("x2", String(cardCx));
            gradients[i].setAttribute("y2", String(cardCy));
          }
        });
      };

      // Continuously update paths on every frame for smooth fast-scroll
      const tickerId = gsap.ticker.add(() => updatePaths());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%",
          end: "bottom 20%",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Cards converge to center one by one
      cards.forEach((card, i) => {
        const position = i / cards.length;

        tl.to(
          card,
          {
            x: () => {
              const containerRect = container.getBoundingClientRect();
              const cardRect = card.getBoundingClientRect();
              return (
                containerRect.left +
                containerRect.width / 2 -
                (cardRect.left + cardRect.width / 2)
              );
            },
            y: () => {
              const containerRect = container.getBoundingClientRect();
              const cardRect = card.getBoundingClientRect();
              return (
                containerRect.top +
                containerRect.height / 2 -
                (cardRect.top + cardRect.height / 2)
              );
            },
            scale: 1.06,
            rotation: 0,
            ease: "power2.out",
          },
          position * 0.6,
        );
      });

      // Paths fade as cards converge
      tl.to(
        svgRef.current,
        { opacity: 0, ease: "power1.in" },
        0.3,
      );

      // Phase 2: Title fades
      if (titleRef.current) {
        tl.to(
          titleRef.current,
          { scale: 0.78, opacity: 0.85, ease: "power2.out" },
          0,
        );
        tl.to(
          titleRef.current,
          { opacity: 0, scale: 0.7, ease: "power2.in" },
          0.5,
        );
      }

      // Cards pulse near the end
      cards.forEach((card) => {
        tl.to(card, { scale: 1.1, ease: "power1.inOut" }, 0.6);
      });

      // Initial path draw
      updatePaths();

      return () => gsap.ticker.remove(tickerId);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="services-heading relative w-full"
      style={{ minHeight: "100vh" }}
    >
      <div
        ref={panelRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 md:py-0"
      >
        <div
          ref={titleRef}
          className="relative z-10 text-center px-4 pointer-events-none select-none mb-8 md:mb-0"
        >
          <div className="inline-flex mb-8 items-center px-6 py-2.5 rounded-full border border-[rgb(33,127,241)] text-[rgb(33,127,241)] text-sm font-semibold">
            Services
          </div>
          <h2 className="text-4xl xl:text-7xl font-medium leading-9 xl:leading-16 tracking-tight text-[rgb(33,127,241)]">
            Manual Work
            <br />
            Slows You Down.
            <br />
            AI Changes That.
          </h2>
        </div>

        {/* Desktop: SVG dynamic lines + cards */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center">
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          >
            <defs>
              {SERVICES.map((svc, i) => (
                <linearGradient
                  key={`grad-${svc.id}`}
                  id={`line-gradient-${i}`}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="rgb(33,127,241)" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="rgb(33,127,241)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(33,127,241)" stopOpacity="0.8" />
                </linearGradient>
              ))}
            </defs>
            {SERVICES.map((svc, i) => (
              <path
                key={svc.id}
                ref={(el) => setPathRef(el, i)}
                fill="none"
                stroke={`url(#line-gradient-${i})`}
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-20"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </path>
            ))}
          </svg>

          <div ref={containerRef} className="relative w-full h-full max-w-7xl">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.id}
                ref={(el) => setCardRef(el, i)}
                className={`absolute z-20 ${
                  i === 0
                    ? "top-[8%] left-[2%]"
                    : i === 1
                      ? "top-[42%] left-[0%]"
                      : i === 2
                        ? "top-[6%] right-[2%]"
                        : i === 3
                          ? "top-[50%] right-[2%]"
                          : "bottom-[4%] left-[35%]"
                }`}
                style={{ transform: "scale(0.92)" }}
              >
                <ServiceCard
                  title={svc.title}
                  icon={svc.icon}
                  image={svc.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: scrollable horizontal card layout */}
        <div className="flex md:hidden w-full overflow-x-auto gap-4 px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="snap-center shrink-0 first:pl-2 last:pr-2">
              <ServiceCard
                title={svc.title}
                icon={svc.icon}
                image={svc.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
