import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-terminal">$</span> echo &quot;© {new Date().getFullYear()}{" "}
          {profile.name}&quot;
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-terminal transition-colors"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-terminal transition-colors"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-terminal transition-colors"
          >
            <FaEnvelope className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
