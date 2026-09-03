import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/issouail",
    href: siteConfig.github,
    Icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-username",
    href: siteConfig.linkedin,
    Icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative overflow-hidden bg-surface py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-btc opacity-10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-btc">
          05 — Next Block
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight md:text-5xl">
          Let's <span className="text-gradient-btc">build something.</span>
        </h2>
        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-stardust md:text-lg">
          Available for roles in web development, frontend engineering, and
          AI-assisted product work. Open to remote and international teams.
        </p>

        <div className="mt-12 max-w-3xl">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-void/60 px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-btc/50 hover:shadow-glow-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex rounded-lg border border-btc/50 bg-btc/10 p-3 transition-all duration-300 group-hover:shadow-glow-orange">
                  <Icon size={20} strokeWidth={2} className="text-btc" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-stardust">
                    {label}
                  </p>
                  <p className="mt-0.5 font-body text-sm text-white">{value}</p>
                </div>
              </div>
              <span className="flex items-center gap-2">
                <span className="hidden items-center gap-1.5 font-mono text-xs text-btc sm:flex">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-btc opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-btc" />
                  </span>
                  Available
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-btc transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
