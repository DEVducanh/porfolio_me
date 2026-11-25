export const profile = {
  name: "Nguyễn Đức Anh",
  role: "Junior Full-Stack Developer",
  location: "Hanoi, Vietnam",
  availability: "Open to opportunities",
  email: "nguyendanh191025@gmail.com",
  phone: "0913 397 866",
  github: "https://github.com/DEVducanh",
  introduction:
    "Junior Full-Stack Developer with approximately one year of professional experience developing and maintaining web applications. Experienced in building user interfaces with React.js and Next.js, developing RESTful APIs with Node.js and NestJS, and working with MongoDB and PostgreSQL. Familiar with Docker, Git, GitHub, and Linux-based development and deployment workflows.",
  yearsExperience: "1 yr",
  gpa: "3.4/4.0",
  certificates: "3",
};

export const skillGroups = [
  { title: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "React Hooks"] },
  { title: "State & data fetching", skills: ["Redux Toolkit", "React Query", "Zustand", "Context API"] },
  { title: "Backend", skills: ["Node.js", "NestJS", "Python", "RESTful APIs", "JWT", "OAuth 2.0"] },
  { title: "Databases & tools", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Git", "GitHub", "Docker", "Linux", "Postman", "Swagger"] },
];

export const projects = [
  {
    number: "01",
    featured: true,
    category: "Farcaster Mini App · NFT Auction",
    title: "BitBid — NFT Auction App",
    description:
      "An NFT auction web app for Farcaster with real-time bidding, price tracking, and activity updates. Blockchain-based verification supports NFT authenticity in a simple experience for new and experienced collectors.",
    stack: [],
    link: "#contact",
    linkLabel: "Discuss this project",
    visual: "nft-auction",
    accent: "violet",
  },
  {
    number: "02",
    featured: false,
    category: "Professional experience · Onechain Technology JSC",
    title: "Game Management CMS — Utopia Platform",
    description:
      "Built Utopia Platform admin features with React.js, TypeScript, Tailwind CSS, and shadcn/ui. Developed Node.js and NestJS APIs for game and account data backed by MongoDB and PostgreSQL.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Node.js", "NestJS", "MongoDB", "PostgreSQL"],
    link: "#experience",
    linkLabel: "See experience",
    visual: "cms-game",
    accent: "mint",
  },
  {
    number: "03",
    featured: false,
    category: "Professional experience · Corporate website",
    title: "Corporate Website — onechain.tech",
    description:
      "Developed web application features with Next.js and TypeScript, integrated backend APIs with Swagger documentation, and used Redux Toolkit and React Query for state management and data fetching.",
    stack: ["Next.js", "TypeScript", "Swagger", "Redux Toolkit", "React Query"],
    link: "https://onechain.tech",
    linkLabel: "Visit website",
    visual: "corporate-site",
    accent: "blue",
  },
  {
    number: "04",
    featured: false,
    category: "Graduation project · FPT Polytechnic College",
    title: "QR Code Food Ordering System",
    description:
      "A food ordering project that lets customers scan a QR code to access the menu and place an order. Took the primary backend development role, built the server, and supported frontend development and API integration.",
    stack: [],
    link: "#experience",
    linkLabel: "See education",
    visual: "qr-ordering",
    accent: "lavender",
  },
];

export const experience = {
  role: "Full-Stack Developer",
  company: "Onechain Technology JSC",
  period: "Aug 2025 — Nov 2026",
  bullets: [
    "Developed Game Management CMS administrative interfaces and features using React.js, TypeScript, Tailwind CSS, and shadcn/ui.",
    "Designed and developed RESTful APIs with Node.js and NestJS for game data and account management, backed by MongoDB and PostgreSQL.",
    "Built features for the corporate website with Next.js and TypeScript; integrated backend APIs documented with Swagger.",
    "Used Redux Toolkit and React Query for state management and data fetching, and contributed to integrating a chatbot into the company web platform.",
    "Maintained web applications, investigated bugs, implemented fixes, and used Docker, Git, and GitHub workflows in Linux environments.",
  ],
};

export const education = {
  school: "FPT Polytechnic College",
  major: "Web Development",
  period: "Aug 2023 — Aug 2025",
  gpa: "3.4 / 4.0",
  highlights: [
    "Graduated with strong academic performance.",
    "Served as team leader in academic projects, coordinating tasks and tracking project milestones.",
    "Took the primary backend development role in the graduation project, building the server and supporting frontend development and API integration.",
  ],
};

export const certificates = [
  { title: "Introduction to Software Engineering", provider: "Coursera", date: "April 2026" },
  { title: "Introduction to HTML, CSS, & JavaScript", provider: "Coursera", date: "April 2026" },
  { title: "Programming for Everybody (Python)", provider: "Coursera", date: "October 2026" },
];
