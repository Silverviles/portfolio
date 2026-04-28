import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import type { Page } from "@/types";

const nav: { page: Page; label: string }[] = [
  { page: "home", label: "home" },
  { page: "projects", label: "projects" },
  { page: "about", label: "about" },
  { page: "experience", label: "experience" },
  { page: "contact", label: "contact" },
];

interface SiteHeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export function SiteHeader({ currentPage, navigate }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (page: Page) => {
    navigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleNav("home")}
          className="font-mono text-sm text-foreground hover:text-terminal transition-colors"
        >
          <span className="text-terminal">~/</span>
          {profile.handle}
          <span className="caret align-middle" />
        </button>

        <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
          {nav.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                currentPage === item.page
                  ? "text-terminal"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 font-mono text-sm">
            {nav.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-2 py-3 text-left border-b border-border/40 last:border-0 ${
                  currentPage === item.page ? "text-terminal" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
