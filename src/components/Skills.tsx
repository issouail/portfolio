import { Layers, Sparkles } from "lucide-react";
import { skills } from "../config/site";

const categories: { key: string; label: string }[] = [
  { key: "Frontend", label: "Frontend" },
  { key: "Language", label: "Languages" },
  { key: "Backend", label: "Backend & Data" },
  { key: "Database", label: "Databases" },
  { key: "Deployment", label: "Deployment" },
  { key: "AI", label: "AI" },
  { key: "Tooling", label: "Tooling & Ops" },
  { key: "Design", label: "Design" },
  { key: "Domain", label: "Domain" },
  { key: "Soft Skill", label: "Communication" },
];

const grouped = categories
  .map(({ key, label }) => ({
    label,
    items: skills.filter((s) => s.category === key).map((s) => s.name),
  }))
  .filter((g) => g.items.length > 0);

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="bg-void py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-btc">
              02 — Capabilities
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Skills
            </h2>
          </div>
          <p className="font-mono text-[11px] text-stardust sm:text-xs">
            {skills.length} tools · {grouped.length} areas
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 md:mt-12 md:grid-cols-3 md:gap-6">
          {grouped.map((group) => (
            <div
              key={group.label}
              className={`rounded-xl border border-white/10 bg-surface p-3.5 transition-all duration-300 hover:border-btc/50 hover:shadow-glow-orange md:rounded-2xl md:p-6 ${
                group.items.length > 5 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 md:pb-3">
                <h3 className="flex items-center gap-1.5 font-heading text-[13px] font-semibold text-white md:gap-2 md:text-base">
                  <Layers size={14} className="text-btc md:size-4" />
                  {group.label}
                </h3>
                <span className="font-mono text-[10px] text-stardust md:text-xs">
                  {group.items.length}
                </span>
              </div>
              <ul className="mt-3 space-y-2 md:mt-4 md:space-y-2.5">
                {group.items.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 font-body text-sm text-stardust transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-btc to-gold" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-gold/30 bg-gold/5 p-3.5 md:mt-10 md:p-4">
          <Sparkles size={16} className="text-gold" />
          <p className="font-mono text-xs text-stardust md:text-sm">
            Always adding — currently exploring{" "}
            <span className="text-gold">AI API integration</span>,{" "}
            <span className="text-gold">prompt engineering</span>, and{" "}
            <span className="text-gold">responsive design</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
