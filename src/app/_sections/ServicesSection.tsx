import Image from "next/image";
import { Bot, BarChart3, Server, Zap, LayoutGrid } from "lucide-react";

const SERVICES = [
  {
    id: "chatbots",
    title: "Chatbots",
    icon: Bot,
    image:
      "https://framerusercontent.com/images/vLGZ7zrhEIqoSQ0lvhS8aCFwHw.jpg?width=410&height=326",
    position: "top-[8%] left-[2%]",
  },
  {
    id: "ai-reports",
    title: "AI Reports",
    icon: BarChart3,
    image:
      "https://framerusercontent.com/images/I0WkDdBbRV8BJg0aAxZyyn8Ka4.jpg?width=410&height=326",
    position: "top-[42%] left-[0%]",
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: LayoutGrid,
    image:
      "https://framerusercontent.com/images/YSybZkqkAcjWEoOf9ur8tRKiE.jpg?width=410&height=326",
    position: "top-[6%] right-[2%]",
  },
  {
    id: "automation",
    title: "Automation",
    icon: Zap,
    image:
      "https://framerusercontent.com/images/SlNqGUqwLH7j93oGQqw6qf1rzA.jpg?width=410&height=326",
    position: "top-[50%] right-[2%]",
  },
  {
    id: "systems",
    title: "Systems",
    icon: Server,
    image:
      "https://framerusercontent.com/images/7hu04KS49K7SuKEa8fyKrGSg.jpg?width=410&height=326",
    position: "bottom-[4%] left-[35%]",
  },
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
    <div className="w-55 rounded-[26px] bg-[#f3f6fb] overflow-hidden">
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
  return (
    <section className="services-heading relative flex items-center justify-center min-h-dvh w-full overflow-hidden">
      <div className="relative z-10 text-center px-4 pointer-events-none select-none">
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
      {/* Bounded Card Container */}
      <div className="absolute inset-0 flex justify-center">
        <div className="relative w-full max-w-7xl">
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              className={`absolute ${svc.position} z-20`}
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
    </section>
  );
};

export default ServicesSection;
