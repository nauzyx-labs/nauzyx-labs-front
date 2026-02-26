import Grainient from "@/components/Grainient";
import { MouseIcon } from "lucide-react";
import Image from "next/image";

const AVATAR_URLS = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=5",
  "https://i.pravatar.cc/40?img=9",
];

const STARS_ARR = [0, 1, 2, 3, 4];

function AvatarGroup() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4">
      <div className="flex -space-x-2">
        {AVATAR_URLS.map((src) => (
          <Image
            key={src}
            src={src}
            alt="client avatar"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />
        ))}
      </div>
      <div className="text-center sm:text-left">
        <div className="flex gap-0.5 mb-0.5 items-center justify-center sm:justify-start">
          {STARS_ARR.map((s) => (
            <span key={s} className="text-white font-mono">
              •
            </span>
          ))}
          <span className="text-xs font-semibold text-white ml-1">4.9 / 5</span>
        </div>
        <p className="text-xs text-gray-100">
          Trusted by{" "}
          <span className="font-bold text-gray-200">500+ companies</span>
        </p>
      </div>
    </div>
  );
}

const HeroSection = ({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLElement>;
}) => {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Grainient WebGL background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#1b3864"
          color2="#1c4786"
          color3="#3e99ab"
          timeSpeed={0.55}
          colorBalance={-0.08}
          warpStrength={2.25}
          warpFrequency={8.1}
          warpSpeed={1.2}
          warpAmplitude={43}
          blendAngle={48}
          blendSoftness={0.18}
          rotationAmount={600}
          grainAmount={0}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0.17}
          zoom={1}
        />
      </div>

      <p className="hero-item text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-4 relative z-10">
        Digital Solutions for Modern Business
      </p>
      <h1 className="hero-item relative z-10 text-white font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] max-w-4xl mb-0">
        Transform Your
        <br />
        Business with
        <br />
        Smart Solutions
      </h1>
      {/* Right side description + CTAs */}
      <div className="hero-item absolute right-4 sm:right-6 md:right-10 bottom-16 md:bottom-20 max-w-xs md:max-w-sm text-right z-10">
        <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5">
          <strong>Empower your team.</strong> Drive efficiency, accelerate
          growth, and stay ahead with cutting-edge digital solutions designed
          for modern enterprises.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
          <button className="border border-white/60 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all">
            Learn more
          </button>
          <button className="bg-blue-500/80 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-blue-400 transition-all backdrop-blur-sm">
            Get started
          </button>
        </div>
      </div>
      <div className="hero-item relative z-10 mt-8 sm:mt-12 px-4 sm:px-0">
        <AvatarGroup />
      </div>
      <div className="hero-item absolute bottom-4 sm:bottom-6 right-4 sm:right-10 flex items-center gap-2 text-white/60 text-xs z-10">
        <MouseIcon size={14} />
        <span className="hidden sm:inline">Scroll to explore</span>
        <span className="sm:hidden">Explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
