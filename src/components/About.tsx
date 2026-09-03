import { Activity, Languages, Package } from "lucide-react";

const highlights = [
  {
    label: "Projects shipped",
    value: "3+",
    Icon: Package,
  },
  {
    label: "Languages",
    value: "3",
    Icon: Languages,
  },
  {
    label: "Growth",
    value: "Self-taught",
    Icon: Activity,
  },
];

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-surface py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-btc">
              01 — Overview
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              About
            </h2>
            <div className="mt-5 h-px w-14 bg-gradient-btc lg:w-16" />

            <div className="mt-6 grid grid-cols-3 gap-2.5 lg:mt-8 lg:grid-cols-1 lg:gap-4 xl:grid-cols-3">
              {highlights.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-void/60 p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-btc/50 hover:shadow-glow-orange lg:rounded-2xl lg:p-5 lg:text-left"
                >
                  <div className="mx-auto mb-2 inline-flex rounded-lg border border-btc/50 bg-btc/10 p-2 lg:mb-3 lg:p-2.5">
                    <Icon size={16} className="text-btc" />
                  </div>
                  <p className="font-heading text-lg font-semibold text-gradient-btc lg:text-2xl">
                    {value}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-stardust lg:mt-1 lg:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-heading text-2xl font-medium leading-relaxed text-white md:text-3xl">
              Ouail Djebbari is a 23-year-old self-taught developer working at
              the intersection of modern frontend engineering and{" "}
              <span className="text-gradient-btc">AI-assisted development</span>.
            </p>
            <p className="mt-6 font-body text-base leading-relaxed text-stardust md:text-lg">
              Fluent in English and Arabic with working French (B1), he has
              shipped multiple independent, full-cycle projects — from product
              idea to deployed, production-ready web applications. His stack
              centers on React, TypeScript, and Tailwind CSS, backed by Node.js,
              PostgreSQL, and Supabase, with deployments across Vercel, Netlify,
              Railway, and Render.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-stardust md:text-lg">
              He approaches AI not as a shortcut, but as a leverage tool — using
              prompt engineering and API integration to build faster without
              sacrificing quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
