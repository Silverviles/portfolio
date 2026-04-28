import { profile } from "@/data/portfolio";
import { SectionLabel } from "@/components/section-label";

const facts = [
  "Dean's List award at SLIIT for excellent academic performance.",
  "SLIITXtream Hackathon 2nd Runner-up.",
  "Microsoft Certified: Azure Developer Associate.",
  "Meta Backend Developer & Google IT Support certified.",
  "Rotaract Club Committee Member (2023 – 2024).",
  "Computer Society Secretary at Bandaranayake College (2019 – 2020).",
];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionLabel>cat about.md</SectionLabel>
      <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight">About</h1>

      <div className="mt-10 grid gap-10 md:grid-cols-[180px_1fr] items-start">
        <div className="rounded-lg border border-border overflow-hidden w-40 aspect-square">
          <img
            src="/photo.png"
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/90">{profile.bio}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Outside of work, I enjoy exploring new technologies, contributing to open-source projects,
            and mentoring fellow engineers. Currently pursuing my BSc. in IT at SLIIT while working
            full-time in the industry.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SectionLabel>highlights</SectionLabel>
        <ul className="space-y-2 font-mono text-sm">
          {facts.map((f) => (
            <li key={f} className="flex gap-3 text-muted-foreground">
              <span className="text-terminal">▸</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
