import cao from "../Gallery/cao.png"
import moview from "../Gallery/moview.png"
import nutrimate from "../Gallery/nutrimate.png"

export const profile = {
  name: "Bryant Evant Mulya",
  role: "Software Developer",
  location: "Jambi, Indonesia",
  tagline: "I build software that gets out of the way.",
  summary:
    "Hi, my name is Bryant Evant Mulya, an Informatics student at BINUS University with interests in Software Engineering and Mobile Application Development. Skilled in full-stack development, mobile application development, backend development, database management, and API integration. Passionate about building innovative solutions and eager to apply technical knowledge, creativity, problem-solving, and collaboration skills to real-world technology projects.",
  email: "bryantevantmulya@gmail.com",
  major: "Software Engineer",
  phone: "+628221007878",
  socials: [
    { label: "GitHub", href: "https://github.com/bryantEva" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" }
  ],
};

export const navItems = [
  { id: "home", file: "home", label: "Home" },
  { id: "projects", file: "projects", label: "Projects" },
  { id: "skills", file: "skills", label: "Skills" },
  { id: "contact", file: "contact", label: "Contact" },
];

export const projects = [
  {
    name: "MoView",
    description:
      "Aplikasi mobile berbasis komunitas untuk pecinta film. Aplikasi ini membantu pengguna menemukan rekomendasi tontonan sesuai preferensi, mengakses informasi detail, serta saling berbagi ulasan sebagai referensi sebelum menonton.",
    role: "BackEnd Developer",
    stack: ["Express.js", "node.js", "MySQL"],
    foto: moview
  },
  {
    name: "Cao!",
    description:
      "Your go-to platform for discovering and organizing curated places in one place. Platform praktis untuk mengeksplorasi, mengumpulkan, dan mengelola daftar tempat-tempat menarik favorit Anda.",
    role: "BackEnd Developer",
    stack: ["Express.js", "node.js", "MySQL"],
    foto: cao
  },
  {
    name: "NutriMate",
    description:
      "Aplikasi diet meal planner cerdas yang menganalisis profil pengguna untuk menghasilkan rekomendasi menu makan harian secara terpersonalisasi, sesuai dengan data dan target kesehatan individu.",
    role: "FullStack Developer",
    stack: ["Express.js", "Node.js", "React", "TailwindCSS"],
    foto: nutrimate
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    label: "Frameworks",
    items: ["React", "Express", "Tailwind CSS", "Flutter"],
  },
  {
    label: "Tools",
    items: ["Git", "Figma", "Postman"],
  },
];
