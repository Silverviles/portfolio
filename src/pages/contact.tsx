import { useState } from "react";
import { FaCopy, FaCheck, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/portfolio";
import { SectionLabel } from "@/components/section-label";

export function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  const links = [
    { icon: FaGithub, label: "GitHub", href: profile.socials.github },
    { icon: FaLinkedin, label: "LinkedIn", href: profile.socials.linkedin },
    { icon: FaEnvelope, label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
      <SectionLabel>./contact.sh</SectionLabel>
      <h1 className="font-mono text-3xl sm:text-5xl font-bold tracking-tight">Get in touch</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        I&apos;m always happy to chat about engineering, side projects, or interesting
        opportunities. The fastest way to reach me is email.
      </p>

      <div className="mt-10 rounded-lg border border-border bg-card p-6">
        <p className="font-mono text-xs text-terminal-dim mb-2">// email</p>
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-lg sm:text-xl text-foreground hover:text-terminal transition-colors break-all"
          >
            {profile.email}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-terminal/40 px-3 py-1.5 font-mono text-xs text-terminal hover:bg-terminal/10 transition-colors"
          >
            {copied ? (
              <>
                <FaCheck className="h-3.5 w-3.5" /> copied
              </>
            ) : (
              <>
                <FaCopy className="h-3.5 w-3.5" /> copy
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:border-terminal/50 hover:shadow-glow transition-all"
          >
            <span className="flex items-center gap-3 font-mono text-sm">
              <Icon className="h-4 w-4 text-terminal" />
              {label}
            </span>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-terminal transition-colors">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
