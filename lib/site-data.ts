export const siteConfig = {
  name: "Yashika Shetty",
  title: "Yashika Shetty | AI Automation Engineer & Software Engineer",
  description:
    "Software Engineer specializing in AI Automation, Python, Full Stack Development, API Integrations, and FinTech Applications.",
  url: "https://yashikashetty.dev",
  email: "yashikasshetty15@gmail.com",
  location: "Kalyan, Maharashtra",
  greeting: "Hello, I'm",
  bio: "Software Engineer with 3+ years of experience building scalable fintech applications, AI-powered automation systems, and full-stack web applications. Passionate about leveraging AI, APIs, and modern technologies to automate workflows and solve real-world business challenges.",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/YashikaSShetty",
    label: "GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yashika-shetty/",
    label: "LinkedIn profile",
  },
  {
    name: "Email",
    href: "mailto:yashikasshetty15@gmail.com",
    label: "Send email",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroRoles = [
  "Frontend Engineer",
  "Software Engineer",
  "AI Automation Engineer",
  "Python Developer",
  "Full Stack Developer",
  "API Integration Specialist",
  "LLM Application Builder",
] as const;

export const heroStats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Components Built", value: 50, suffix: "+" },
  { label: "Error Reduction", value: 40, suffix: "%" },
  { label: "API Integrations", value: 10, suffix: "+" },
] as const;

export const aboutContent = {
  title: "About Me",
  paragraphs: [
    "I am a Software Engineer with experience building fintech applications, integrating APIs, and developing scalable web solutions.",
    "My expertise spans React, Angular, Node.js, Python, REST APIs, and AI-powered automation systems. I enjoy building intelligent applications that automate manual processes and deliver measurable business impact.",
    "Recently, I have been focused on AI workflows, LLM-powered applications, document processing, and automation pipelines that help organizations work smarter and faster.",
  ],
  timeline: [
    {
      year: "2023",
      title: "Software Engineer at Nucsoft Ltd",
      description: "Building fintech applications and API integrations.",
    },
    {
      year: "2024",
      title: "AI & Automation Focus",
      description: "LLM workflows, document processing, and automation pipelines.",
    },
    {
      year: "2025",
      title: "Full Stack & AI Solutions",
      description: "Delivering intelligent apps with measurable business impact.",
    },
  ],
};

export const skillCategories = [
  {
    title: "AI & Automation",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Workflows",
      "LLM Applications",
      "Document Processing",
      "AI Automation",
      "Workflow Design",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", ".NET APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MSSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "CI/CD", "SonarQube", "Pandas"],
  },
] as const;

export const experience = {
  company: "Nucsoft Ltd",
  role: "Software Engineer",
  duration: "June 2023 - Present",
  achievements: [
    {
      text: "Built and maintained fintech applications using Angular, React, and .NET.",
      metric: null,
      icon: "code",
    },
    {
      text: "Developed 50+ reusable Angular components improving UI responsiveness by 30%.",
      metric: "30%",
      icon: "layers",
    },
    {
      text: "Designed and integrated REST APIs reducing manual processing errors by 40%.",
      metric: "40%",
      icon: "api",
    },
    {
      text: "Worked on Credit Deferral, Director Master, and Document Collection workflows.",
      metric: null,
      icon: "workflow",
    },
    {
      text: "Improved frontend performance by 45%.",
      metric: "45%",
      icon: "zap",
    },
    {
      text: "Resolved production issues involving API integrations and workflow automation.",
      metric: null,
      icon: "shield",
    },
  ],
};

export const projects = [
  {
    title: "AI Financial Research Assistant",
    techStack: ["Python", "OpenAI API", "REST APIs"],
    description:
      "Built an AI-powered workflow that collects financial news, analyzes market information, extracts insights, and generates structured reports using LLM APIs.",
    features: [
      "AI Summarization",
      "Financial Data Collection",
      "Automated Reports",
      "Insight Extraction",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial PDF Analyzer",
    techStack: ["Python", "PDF Processing", "Data Extraction"],
    description:
      "Developed a document-processing system that extracts, cleans, structures, and summarizes information from financial reports automatically.",
    features: [
      "PDF Parsing",
      "Financial Analysis",
      "Data Extraction",
      "Automated Summaries",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Smart Interview Tracker",
    techStack: ["React", "Node.js", "MongoDB"],
    description:
      "Created a full-stack platform for tracking job applications, interview notes, dashboards, filters, and progress analytics.",
    features: [
      "Dashboard",
      "CRUD APIs",
      "Analytics",
      "Interview Tracking",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
] as const;

export const certifications = [
  {
    title: "HackerRank Certified Angular",
    verifyUrl: "#",
  },
  {
    title: "HackerRank Certified React",
    verifyUrl: "#",
  },
  {
    title: "HackerRank Certified SQL",
    verifyUrl: "#",
  },
] as const;

export const education = {
  degree: "Bachelor of Engineering in Computer Engineering",
  university: "Mumbai University",
  cgpa: "8.9/10",
  year: "2023",
};

export const services = [
  {
    title: "AI Automation Solutions",
    description:
      "Design intelligent workflows with LLMs, APIs, and automation pipelines that reduce manual work.",
    icon: "bot",
  },
  {
    title: "Full Stack Development",
    description:
      "Build scalable web applications with modern React, Angular, and Node.js stacks.",
    icon: "layers",
  },
  {
    title: "API Integration & Development",
    description:
      "Connect systems with robust REST APIs and seamless third-party integrations.",
    icon: "plug",
  },
  {
    title: "Document Processing Systems",
    description:
      "Extract, structure, and summarize data from PDFs and financial documents automatically.",
    icon: "file",
  },
] as const;

export const floatingTechIcons = [
  "react",
  "python",
  "nodejs",
  "typescript",
  "mongodb",
  "openai",
] as const;
