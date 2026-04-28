export const profile = {
  name: "Tharindu Siriwardhana",
  handle: "Silverviles",
  role: "Software Engineer",
  tagline: "Building scalable REST APIs, clean microservice architectures, and AI-integrated enterprise systems.",
  location: "Udugampola, Sri Lanka",
  email: "sudarakatharindu@outlook.com",
  bio: "Software Engineer with 2 years of industry experience specializing in backend architecture and API development. Proven ability to build scalable REST APIs, design clean microservice architectures, and integrate AI/LLM APIs into enterprise systems. Adept at utilizing Java, Spring Boot, and SQL to deliver production-grade, secure software solutions that improve customer efficiency.",
  socials: {
    github: "https://github.com/Silverviles",
    linkedin: "https://www.linkedin.com/in/tharindu-siriwardhana/",
  },
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "complisense",
    title: "CompliSense",
    description:
      "AI-driven enterprise browser compliance & DLP platform. Vertex AI / Gemini for DLP, email risk, and file classification in FastAPI services on GCP, with a Manifest V3 Chrome extension for enterprise compliance workflows.",
    stack: ["Python", "FastAPI", "Vue 3", "TypeScript", "GCP", "Vertex AI", "Gemini", "Docker", "Firestore"],
    featured: true,
  },
  {
    slug: "nexar",
    title: "Nexar",
    description:
      "Quantum-Classical Workload Orchestration System (Research Project). Routes tasks between classical and quantum resources using AI-driven scheduling, with support for OpenQASM and Q# programs and automated cloud infrastructure via Terraform.",
    stack: ["Python", "FastAPI", "TypeScript", "React", "Terraform", "OpenQASM", "Claude API", "Gemini API"],
    github: "https://github.com/Silverviles/nexar",
    featured: true,
  },
  {
    slug: "laundriq",
    title: "LaundrIQ",
    description:
      "Cloud-native laundry management system built with a full microservices architecture. Java Spring Boot and TypeScript services communicate via gRPC with Protocol Buffers, secured by JWT, deployed with Docker and Terraform CI/CD pipelines.",
    stack: ["Java", "Spring Boot", "TypeScript", "Docker", "gRPC", "Protocol Buffers", "JWT", "Terraform"],
    github: "https://github.com/Silverviles/CTSE-Assignment-LaundrIQ",
    featured: true,
  },
  {
    slug: "zap-ev",
    title: "Zap EV Charging Station",
    description:
      "EV charging station booking system with a Java Spring Boot backend, a C# / .NET microservice for payment processing, and a TypeScript web interface with secure booking and payment APIs.",
    stack: ["Java", "Spring Boot", "C#", ".NET", "TypeScript"],
  },
  {
    slug: "aquaguard",
    title: "AquaGuard",
    description:
      "Community-driven mobile app for mapping water sources and reporting water quality. Built with React Native (Expo) and TypeScript, it lets users locate and monitor water source conditions in their area.",
    stack: ["TypeScript", "React Native", "Expo"],
    github: "https://github.com/Silverviles/aquaGuard",
  },
  {
    slug: "dressing-room",
    title: "Dressing Room",
    description:
      "Virtual wardrobe management app with authenticated routes for managing clothing collections, skin tone customization, outfit preset saving, and a virtual dress room. React + Tailwind frontend with a Node.js / Express backend using Puppeteer for automation.",
    stack: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "Puppeteer"],
    github: "https://github.com/Silverviles/dressing-room",
  },
  {
    slug: "rpa-extractor",
    title: "RPA Extractor",
    description:
      "Desktop tool for managing Ren'Py Archive (.rpa) files — browse, extract, edit, preview, and repack game archives. Supports RPA 2.0/3.0/3.2, in-app text editing, image previews, and .rpyc bytecode decompilation.",
    stack: ["Rust", "GTK4"],
    github: "https://github.com/Silverviles/rpa_extractor",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Codimite Pvt. Ltd.",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    location: "Remote",
    bullets: [
      "Acted as lead developer providing enterprise solutions and secure data migration services related to Zoom APIs.",
      "Integrated AI/LLM capabilities into enterprise applications by utilizing the Gemini API within Google Cloud environments.",
      "Managed GCP infrastructure using Terraform to deploy production-grade releases.",
      "Mentored junior engineers through training sessions and rigorous code reviews.",
      "Utilized browser automations for testing and data extraction for AI services.",
    ],
  },
  {
    company: "Codimite Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Oct 2024 — Jul 2025",
    location: "Remote",
    bullets: [
      "Redesigned the architecture of a self-service migration tool, heavily utilizing microservices and Google Pub/Sub for optimized communication.",
      "Designed and developed scalable web applications integrating third-party APIs (Zoom, Meta).",
      "Wrote and optimized migration scripts using Golang and Python for data migrations between CRM platforms.",
      "Automated script deployments to GKE using GitHub workflows and Terraform.",
    ],
  },
  {
    company: "Avtrasoft Pvt. Ltd.",
    role: "Software Engineer Intern",
    period: "Nov 2023 — Sep 2024",
    location: "Sri Lanka",
    bullets: [
      "Developed and maintained a legacy Spring application built using EJBs on a modular monolith architecture (Spring Framework, ORM, EJB).",
      "Migrated parts of the application from Java 8 to Java 17 as part of an ongoing technology upgrade.",
      "Created and integrated a real-time push notification system for long-running tasks utilizing Server-Sent Events (SSE).",
      "Wrote and optimized SQL queries to improve report generation speed and reduce database server load (Oracle PL/SQL).",
      "Participated in scrum meetings and followed agile software development practices.",
    ],
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  bullets: string[];
};

export const education: Education[] = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc. Information Technology — Software Engineering",
    period: "Nov 2022 — Jun 2026",
    bullets: [
      "Awarded Dean's List for excellent academic performance.",
      "Rotaract Club Committee Member (2023 – 2024).",
    ],
  },
  {
    institution: "Bandaranayake College, Gampaha",
    degree: "High School Diploma — Physical Science Stream",
    period: "Jan 2012 — Dec 2020",
    bullets: [
      "1 B (Combined Mathematics) and 2 Cs in A/L examinations.",
      "Computer Society Secretary (2019 – 2020).",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Java / J2EE", "Python", "Golang", "TypeScript", "SQL", "C#"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "FastAPI", "React / Next.js", ".NET", "Sanic", "n8n"],
  },
  {
    category: "Infrastructure",
    items: ["GCP", "Azure", "AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Jenkins", "ArgoCD", "GitLab CI", "gRPC", "NoSQL", "Agile / Scrum"],
  },
];
