import { ArrowUpRight, Code2, Hexagon, Rocket } from "lucide-react";
import { siteConfig } from "../config/site";

const stats = [
  { label: "Projects shipped", value: "3+" },
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
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-btc opacity-10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold opacity-5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-32 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-32 lg:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-btc/40 bg-btc/10 px-4 py-1.5 font-mono text-xs tracking-wider text-btc">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-btc opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-btc" />
            </span>
            Self-taught developer · 23
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Building web apps with{" "}
            <span className="text-gradient-btc">React, TypeScript</span> &amp;
            AI-assisted development
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-stardust md:text-lg">
            From idea to deployed product — I architect, build, and ship
            production web applications across the full stack. Fluency in
            English, Arabic, and French (B1).
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.projectsRepo}
              className="bg-gradient-btc inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-white shadow-glow-orange transition-all duration-300 hover:scale-105 hover:shadow-glow-orange-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
            >
              View Repo <ArrowUpRight size={18} strokeWidth={2} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-7 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
            >
              See Work
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center md:h-[440px] md:w-[440px]">
          <div className="absolute inset-0 animate-float">
            <div
              className="absolute inset-6 rounded-full border border-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute inset-16 rounded-full border border-btc/40"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 animate-spin rounded-full border border-dashed border-btc/30"
              style={{ animationDuration: "10s" }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-6 animate-spin-reverse rounded-full border border-dashed border-gold/30"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gradient-btc flex h-24 w-24 items-center justify-center rounded-2xl shadow-glow-orange-lg">
                <Hexagon size={48} strokeWidth={1.5} className="text-white" />
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

          <div className="absolute -bottom-6 left-1/2 flex w-full max-w-sm -translate-x-1/2 flex-col gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-sm shadow-glow-card transition-all duration-300 hover:border-btc/50 hover:shadow-glow-orange"
              >
                <span className="font-heading text-lg font-semibold text-gradient-btc">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-stardust">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
