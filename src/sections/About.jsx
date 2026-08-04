import Reveal from "../components/Reveal";
import SectionBackground from "../components/SectionBackground";

function About() {
  return (
   <section
  id="about"
  className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
>
 <SectionBackground />
      <div className="relative z-10 site-container">
        {/* Heading */}

       <Reveal className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">

            ABOUT ME

          </p>
<h2 className="max-w-2xl mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">

  Building Modern

  <br />

  <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
    Digital Experiences
  </span>

</h2>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-400">

  I'm a Software Engineering student passionate about
  building modern web applications with clean UI,
  responsive layouts, and scalable frontend architecture.
  I enjoy transforming ideas into fast, elegant,
  and user-friendly digital experiences.

</p>

        </Reveal>
        <div className="mt-12 h-px w-40 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent"></div>
       <Reveal
  delay={0.2}
  className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
>

  {/* Profile */}

  <div className="group relative lg:col-span-2 rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

  <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-blue-500/10 blur-2xl"></div>

<div className="flex justify-center lg:justify-start">
  <img
    src="/image/profile.png"
    alt="Dennis"
   className="mb-8 h-52 w-52 rounded-3xl object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
  />
</div>

    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
      Dennis Ali Fadillah
    </h3>

    <p className="mt-4 leading-8 text-slate-400">

      Passionate about building beautiful, responsive,
      and modern web applications using React,
      Next.js, Tailwind CSS, Express.js and MySQL.

    </p>

  </div>

  {/* Education */}

  <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      Education
    </p>

    <h3 className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
      SMK Taruna Bhakti
    </h3>

    <p className="mt-3 text-slate-400">
      Software Engineering
    </p>

  </div>

  {/* Location */}

  <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      Location
    </p>

    <h3 className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
      Indonesia
    </h3>

    <p className="mt-3 text-slate-400">
      Open for Remote Work
    </p>

  </div>

</Reveal>

<Reveal
  delay={0.3}
  className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
>

  {/* Availability */}

  <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      Availability
    </p>

    <h3 className="mt-5 text-xl font-bold text-green-400">
      Available
    </h3>

    <p className="mt-3 text-slate-400">
      Looking for Internship Opportunities
    </p>

  </div>

  {/* Experience */}

  <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      Focus
    </p>

    <h3 className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
      Frontend Development
    </h3>

    <p className="mt-3 text-slate-400">
      React • Next.js • Tailwind CSS
    </p>

  </div>

  {/* Tech */}


  <div className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

  

    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
      Tech Stack
    </p>

    <div className="mt-6 flex flex-wrap gap-2">

      {["React", "Next.js", "Tailwind", "Express", "MySQL"].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
        >
          {tech}
        </span>
      ))}

    </div>

  </div>

</Reveal>

<Reveal
  delay={0.4}
  className="mt-6 grid gap-6 md:grid-cols-3"
>

  <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40">

    <h3 className="text-4xl md:text-5xl font-black text-white">3+</h3>

    <p className="mt-3 text-slate-400">
      Completed Projects
    </p>

  </div>

  <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40">

    <h3 className="text-4xl md:text-5xl font-black text-white">5+</h3>

    <p className="mt-3 text-slate-400">
      Technologies Learned
    </p>

  </div>

  <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40">

    <h3 className="text-4xl md:text-5xl font-black text-green-400">
      Open
    </h3>

    <p className="mt-3 text-slate-400">
      Internship Opportunities
    </p>

  </div>

</Reveal>

      </div>
    </section>
  );
}

export default About;