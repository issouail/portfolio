import { siteConfig } from "../config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-void px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs tracking-widest text-stardust">
          © {year}{" "}
          <span className="text-btc">₿</span> {siteConfig.name}
        </p>
        <div className="h-px w-full max-w-xs bg-gradient-to-r from-btc to-gold" aria-hidden="true" />
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-stardust transition-colors duration-200 hover:text-btc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
