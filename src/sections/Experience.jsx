import Reveal from "../components/Reveal";
import SectionBackground from "../components/SectionBackground";

const experiences = [
  {
    year: "2025 - Present",
    title: "Software Engineering Student",
    company: "SMK Taruna Bhakti",
    description:
      "Studying software engineering while building modern web applications using React, Next.js, Express.js, and MySQL.",
  },
  {
    year: "2025",
    title: "Pengaduan Masyarakat",
    company: "Full Stack Developer",
    description:
      "Developed a community complaint reporting system with authentication, dashboard, CRUD, and role-based access.",
  },
  {
    year: "2024",
    title: "E-Commerce Website",
    company: "Frontend Developer",
    description:
      "Built a responsive e-commerce website with modern UI, authentication, and shopping features.",
  },
  {
    year: "Next Goal",
    title: "Frontend Developer Internship",
    company: "Open for Opportunities",
    description:
      "Looking for internship opportunities to gain real-world experience and contribute to impactful projects.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32"
    >

     <SectionBackground />
     <div className="relative z-10 site-container">

        {/* Heading */}

       <Reveal
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
            EXPERIENCE
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

            Learning

            <br />

            <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
              Journey
            </span>

          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-400">

            My learning journey through education,
            personal projects, and continuous
            improvement in web development.

          </p>

    </Reveal>

        <Reveal
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="relative mt-20"
>

 <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"></div>

  <div className="space-y-14">

    {experiences.map((item) => (

      <div
        key={item.title}
        className="relative pl-12 md:pl-14"
      >

        {/* Circle */}

        <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500 bg-slate-950 shadow-[0_0_25px_rgba(59,130,246,.6)]">

          <div className="h-3 w-3 rounded-full bg-blue-500"></div>

        </div>

        {/* Card */}

        <div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-[0_30px_80px_rgba(59,130,246,.22)]">
        <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>
          <span className="absolute right-8 top-6 text-6xl font-black text-white/5">
  0{experiences.indexOf(item) + 1}
</span>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            {item.year}
          </p>

         <h3 className="mt-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
            {item.title}
          </h3>

          <h4 className="mt-2 text-slate-300">
            {item.company}
          </h4>

          <p className="mt-6 leading-8 text-slate-400">
            {item.description}
          </p>

        </div>

      </div>

    ))}

  </div>

</Reveal>

      </div>
    </section>
  );
}

export default Experience;