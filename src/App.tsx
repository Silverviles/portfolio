import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { ProjectsPage } from "@/pages/projects";
import { ExperiencePage } from "@/pages/experience";
import { ContactPage } from "@/pages/contact";
import type { Page } from "@/types";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage={page} navigate={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "about" && <AboutPage />}
        {page === "projects" && <ProjectsPage />}
        {page === "experience" && <ExperiencePage />}
        {page === "contact" && <ContactPage />}
      </main>
      <SiteFooter />
    </div>
  );
}
