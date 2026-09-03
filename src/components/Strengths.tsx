import { Quote } from "lucide-react";
import { strengths } from "../config/site";

export function Strengths() {
  return (
    <section id="strengths" aria-label="Strengths" className="bg-void py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-btc">
          04 — Signal
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
          Strengths
        </h2>

        <ol className="relative mt-10 space-y-4 border-l border-white/10 pl-7 md:mt-14 md:space-y-8 md:pl-12">
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-btc via-ember to-transparent"
            aria-hidden="true"
          />
          {strengths.map((strength, i) => (
            <li key={strength} className="relative">
              <span
                className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full border border-btc/60 bg-void font-mono text-[11px] text-btc shadow-glow-orange md:-left-[64px] md:h-8 md:w-8 md:text-xs"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="rounded-xl border border-white/10 bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-btc/50 hover:shadow-glow-orange md:rounded-2xl md:p-6">
                <p className="font-heading text-base font-medium text-white md:text-lg">
                  {strength}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <blockquote className="relative mt-10 overflow-hidden rounded-2xl border border-btc/30 bg-gradient-to-br from-btc/10 to-gold/5 p-6 backdrop-blur-sm md:mt-16 md:p-8 lg:p-12">
          <Quote
            size={40}
            className="absolute right-6 top-6 text-btc opacity-30"
            aria-hidden="true"
          />
          <p className="max-w-3xl font-heading text-xl font-medium leading-snug text-white md:text-3xl">
            "Every project is a complete product — not a demo. Planned, built,
            deployed, and maintained."
          </p>
          <footer className="mt-3 font-mono text-[11px] uppercase tracking-widest text-btc md:mt-4 md:text-xs">
            — Working principle
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
