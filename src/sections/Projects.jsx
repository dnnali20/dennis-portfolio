import Reveal from "../components/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionBackground from "../components/SectionBackground";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Modern e-commerce website with authentication, shopping cart, product management, and responsive UI.",
    image: "/image/projects/e-commerce.png",
    tech: ["React", "Tailwind", "Express", "MySQL"],
    github: "https://github.com/USERNAME/ecommerce",
    demo: "#",
    featured: true,
  },
  {
    title: "Pengaduan Masyarakat",
    description:
      "Community complaint reporting system with role-based authentication, dashboard, report management, and analytics.",
    image: "/image/projects/web pengaduan masyarakat.png",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/USERNAME/pengaduan",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    image: "/image/projects/portofolio.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/USERNAME/portfolio",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
  id="projects"
  className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
>
 <SectionBackground />
      <div className="relative z-10 site-container">

        {/* Heading */}

       <Reveal className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            PROJECTS
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

            Featured

            <br />

            <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>

          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-400">

            Here are some projects I've built using modern web
            technologies with a focus on clean UI, responsive
            design, and user experience.

          </p>

        </Reveal>

        <Reveal delay={0.2} className="mt-20">
  {projects
    .filter((project) => project.featured)
    .map((project, index) => (
      <div
  key={project.title}
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:bg-slate-900 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,.2)]"
>
  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"></div>

<div className="absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div className="grid lg:grid-cols-2">

          {/* Image */}

          <div className="relative overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="h-[350px] w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 lg:h-full"
            />

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-10">

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">

<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

<p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold">
Featured Project
</p>

</div>

            <h3 className="mt-4 text-4xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}

            </div>

            <div className="mt-10 flex gap-4">

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
    className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
  >
    <>
  <FaGithub />
  GitHub
</>
  </a>
  

  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-white/5"
  >
   <>
  Live Demo
  <FaExternalLinkAlt className="text-xs" />
</>
  </a>

</div>

          </div>

        </div>
      </div>
    ))}
</Reveal>

<div className="mt-24 mb-10">

  <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
    MORE PROJECTS
  </p>

  <h3 className="mt-4 text-3xl md:text-4xl font-black text-white">
    Other Works
  </h3>

  <p className="mt-4 max-w-2xl text-slate-400">
    Some additional projects that helped me improve my frontend,
    backend, and full-stack development skills.
  </p>

</div>

<Reveal
  delay={0.3}
  className="mt-10 grid gap-6 md:grid-cols-2"
>
  {projects
  .filter((project) => !project.featured)
  .map((project, index) => (
    <div
      key={project.title}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">
      <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl"></div>
     <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

      </div>

      <div className="relative p-8">
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        <span className="absolute right-8 top-8 text-6xl font-black text-white/5">
  0{index + 1}
</span>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-500"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
          >
           <>
  <FaGithub />
  GitHub
</>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-white/5"
          >
           <>
  Live Demo
  <FaExternalLinkAlt className="text-xs" />
</>
          </a>

        </div>

      </div>

    </div>
))}
</Reveal>

<div className="mt-16 flex justify-center">

  <a
    href="https://github.com/dnnali20"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-full border border-blue-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:bg-blue-600 hover:shadow-[0_20px_60px_rgba(59,130,246,.35)]"
  >
    <>
  <FaGithub />
  View More on GitHub
</>
  </a>

</div>

      </div>

    </section>
  );
}

export default Projects;