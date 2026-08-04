import Reveal from "../components/Reveal";
import { FaServer } from "react-icons/fa";
import SectionBackground from "../components/SectionBackground";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >

      <SectionBackground />
      <div className="site-container">

        {/* Heading */}

       <Reveal className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">

            SKILLS

          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

            Crafting Modern

            <br />

            <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
              Web Experiences
            </span>

          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-400">

            I use modern technologies to build responsive,
            scalable, and user-friendly applications with
            clean architecture and maintainable code.

          </p>

        </Reveal>

        <Reveal
  delay={0.2}
  className="mt-20 grid gap-6 md:grid-cols-2"
>


<div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,0.22)]">
<div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>



  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
    Backend
  </p>  



  <div className="flex items-center gap-3 mt-4">

  <FaServer className="text-blue-400 text-xl" />

  <h3 className="text-2xl font-bold text-white">
    Backend Development
  </h3>

</div>

  <div className="mt-8 flex flex-wrap gap-2">

    {[
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
      "Authentication",
      "CRUD",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
      >
        {item}
      </span>
    ))}

  </div>

</div>

<div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,0.22)]">
<div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>

  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
    Frontend
  </p>

  <h3 className="mt-4 text-2xl font-bold text-white">
    Modern UI Development
  </h3>

  <div className="mt-8 flex flex-wrap gap-2">

    {[
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
      >
        {item}
      </span>
    ))}

  </div>

</div>

<div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,0.22)]">
<div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>

  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
    Database
  </p>

  <h3 className="mt-4 text-2xl font-bold text-white">
    Database & Storage
  </h3>

  <div className="mt-8 flex flex-wrap gap-2">

    {[
      "MySQL",
      "Supabase",
      "Firebase",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
      >
        {item}
      </span>
    ))}

  </div>

</div>

<div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,0.22)]">
<div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>

  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
    Tools
  </p>

  <h3 className="mt-4 text-2xl font-bold text-white">
    Workflow Tools
  </h3>

  <div className="mt-8 flex flex-wrap gap-2">

    {[
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Vercel",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
      >
        {item}
      </span>
    ))}

  </div>

</div>

</Reveal>

      </div>

    </section>
  );
}

export default Skills;