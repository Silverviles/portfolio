import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { profile, projects } from "@/data/portfolio";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import type { Page } from "@/types";

interface HomePageProps {
  navigate: (page: Page) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="font-mono text-sm text-terminal mb-6">
            $ whoami<span className="caret align-middle" />
          </p>
          <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-foreground/90">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("projects")}
              className="inline-flex items-center gap-2 rounded-md bg-terminal px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground hover:shadow-glow transition-shadow"
            >
              ./view-projects <FaArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="inline-flex items-center gap-2 rounded-md border border-terminal/40 px-5 py-2.5 font-mono text-sm font-medium text-terminal hover:bg-terminal/10 transition-colors"
            >
              ./contact-me
            </button>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionLabel>featured.work</SectionLabel>
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold">Selected projects</h2>
          <button
            onClick={() => navigate("projects")}
            className="font-mono text-sm text-terminal hover:underline underline-offset-4"
          >
            see all →
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.slug}
              className="group rounded-lg border border-border bg-card p-6 hover:border-terminal/50 hover:shadow-glow transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono text-lg font-semibold group-hover:text-terminal transition-colors">
                  {p.title}
                </h3>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="text-muted-foreground hover:text-terminal"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                )}
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
      </section>
    </div>
  );
}
