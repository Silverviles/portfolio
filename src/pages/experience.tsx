import { experience, education, skills } from "@/data/portfolio";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";

export function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionLabel>git log --author=tharindu</SectionLabel>
      <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight">Experience</h1>

      <ol className="mt-12 relative border-l border-border pl-6 space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-terminal shadow-glow" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-mono text-lg font-semibold">
                {job.role}{" "}
                <span className="text-terminal">@ {job.company}</span>
              </h2>
              <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
            </div>
            <p className="mt-1 font-mono text-xs text-terminal-dim">{job.location}</p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-terminal mt-1">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-20">
        <SectionLabel>education</SectionLabel>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">Education</h2>
        <ol className="mt-8 relative border-l border-border pl-6 space-y-10">
          {education.map((edu) => (
            <li key={edu.institution} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-terminal/60" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-mono text-lg font-semibold">{edu.degree}</h3>
                <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-terminal-dim">{edu.institution}</p>
              <ul className="mt-4 space-y-2">
                {edu.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-terminal mt-1">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20">
        <SectionLabel>tech.stack</SectionLabel>
        <h2 className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="font-mono text-sm text-terminal mb-3">// {group.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="font-mono text-[11px] border-border/80 text-foreground/90"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
