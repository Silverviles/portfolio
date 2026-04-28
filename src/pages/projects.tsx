import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";

export function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionLabel>ls ~/projects</SectionLabel>
      <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A mix of side projects, open-source libraries, and shipped product work. Click through for
        source code or live demos.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="group rounded-lg border border-border bg-card p-6 hover:border-terminal/50 hover:shadow-glow transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-mono text-xl font-semibold group-hover:text-terminal transition-colors">
                {p.title}
              </h2>
              <div className="flex items-center gap-3 shrink-0 text-muted-foreground">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="hover:text-terminal"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} live demo`}
                    className="hover:text-terminal"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="font-mono text-[10px] border-border/80 text-muted-foreground"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
