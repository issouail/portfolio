type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/70 backdrop-blur-lg">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
        >
          <span className="text-btc">₿</span> OU<span className="text-btc">.</span>DJ
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-stardust transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="bg-gradient-btc rounded-full px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white shadow-glow-orange transition-all duration-300 hover:scale-105 hover:shadow-glow-orange-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
