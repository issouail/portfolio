import { ArrowUpRight, Code2, Hexagon, Rocket } from "lucide-react";
import { siteConfig } from "../config/site";

const stats = [
  { label: "Projects", value: "3+" },
  { label: "Languages", value: "3" },
  { label: "Self-taught", value: "100%" },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-void"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[300px] w-[300px] rounded-full bg-btc opacity-10 blur-[120px] md:h-[500px] md:w-[500px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gold opacity-5 blur-[150px] md:h-[400px] md:w-[400px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-32 lg:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-btc/40 bg-btc/10 px-3 py-1 font-mono text-[11px] tracking-wider text-btc">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-btc opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-btc" />
            </span>
            Self-taught · 23
          </span>

          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Building web apps with{" "}
            <span className="text-gradient-btc">React, TypeScript</span> &amp;
            AI-assisted development
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-stardust md:text-lg">
            From idea to deployed product — I architect, build, and ship
            production web applications across the full stack. Fluency in
            English, Arabic, and French (B1).
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={siteConfig.projectsRepo}
              className="bg-gradient-btc inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-white shadow-glow-orange transition-all duration-300 hover:scale-105 hover:shadow-glow-orange-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc sm:w-auto sm:py-3.5"
            >
              View Repo <ArrowUpRight size={18} strokeWidth={2} />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc sm:w-auto sm:py-3.5"
            >
              See Work
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 lg:mt-12 lg:max-w-md lg:gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-black/40 px-2 py-3 text-center backdrop-blur-sm shadow-glow-card transition-all duration-300 hover:border-btc/50 hover:shadow-glow-orange"
              >
                <span className="font-heading text-xl font-semibold text-gradient-btc lg:text-2xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-stardust lg:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative mx-auto mt-10 hidden h-[240px] w-[240px] items-center justify-center sm:flex md:h-[440px] md:w-[440px] lg:mt-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 animate-float">
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-btc/40" />
            <div
              className="absolute inset-0 animate-spin rounded-full border border-dashed border-btc/30"
              style={{ animationDuration: "10s" }}
            />
            <div className="absolute inset-6 animate-spin-reverse rounded-full border border-dashed border-gold/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gradient-btc flex h-20 w-20 items-center justify-center rounded-2xl shadow-glow-orange-lg md:h-24 md:w-24">
                <Hexagon size={40} strokeWidth={1.5} className="text-white" />
              </div>
            </div>

            <div className="absolute left-0 top-1/4 animate-float rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-sm shadow-glow-card">
              <Code2 size={20} className="text-btc" />
            </div>
            <div
              className="absolute bottom-1/4 right-0 animate-float rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-sm shadow-glow-card"
              style={{ animationDelay: "1.5s" }}
            >
              <Rocket size={20} className="text-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
