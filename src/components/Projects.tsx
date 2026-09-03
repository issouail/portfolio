import { useState } from "react";
import { ArrowUpRight, ExternalLink, ImageIcon } from "lucide-react";
import { projects } from "../config/site";

function ProjectImage({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-btc/15 via-surface to-gold/10">
      {failed ? (
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <ImageIcon size={36} strokeWidth={1.5} className="text-btc/70" />
          <span className="font-heading text-4xl font-bold text-gradient-btc">
            {fallback}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-stardust">
            screenshot coming soon
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:contrast-125"
        />
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-btc">
              03 — Deployed Network
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Projects
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-btc/40 bg-btc/10 px-3 py-1 font-mono text-xs text-btc">
            <span className="h-1.5 w-1.5 rounded-full bg-btc" />
            Live on mainnet
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-void/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-btc/50 hover:shadow-glow-orange"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btc"
                aria-label={`Open ${project.title} project`}
              >
                <div className="relative">
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fallback={project.title.split(" ").map((w) => w[0]).join(" ")}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/90 to-transparent" />
                  <p className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 font-mono text-xs text-btc opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Visit <ExternalLink size={14} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-btc transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-stardust">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-btc/40 bg-btc/10 px-3 py-1 font-mono text-xs text-btc"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
