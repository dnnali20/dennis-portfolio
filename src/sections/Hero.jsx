import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionBackground from "../components/SectionBackground";

import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const techStack = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Express.js",
  "MySQL",
];

const stats = [
  {
    value: "3+",
    label: "Projects",
  },
  {
    value: "Frontend",
    label: "Focus",
  },
  {
    value: "Open",
    label: "Internship",
  },
];

function Hero() {

  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]));
const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]));

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  mouseX.set(e.clientX - rect.left - rect.width / 2);
  mouseY.set(e.clientY - rect.top - rect.height / 2);
};

const handleMouseLeave = () => {
  mouseX.set(0);
  mouseY.set(0);
};

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >

      <SectionBackground />
    
     <div className="relative z-10 site-container">

        <div className="min-h-screen grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md px-5 py-2">

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-sm text-blue-300 font-medium">

                Available for Internship

              </span>

            </div>

            {/* Role */}

            <p className="mt-10 uppercase tracking-[0.35em] text-blue-400 font-semibold">

              Frontend Developer

            </p>

            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">
Based in Indonesia
</p>

            {/* Title */}

            <h1 className="relative mt-6 text-5xl sm:text-6xl md:text-7xl xl:text-[90px] font-black leading-[0.95] tracking-tight">
              <div className="absolute -left-10 top-10 -z-10 h-44 w-44 rounded-full bg-blue-500/10 blur-[100px]" />

  <span className="text-white">
  Dennis
</span>

  <br />

  <span className="bg-gradient-to-r from-blue-300 via-white to-cyan-400 bg-clip-text text-transparent">
  Ali Fadillah
</span>

</h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">

              I build modern, responsive and user-friendly web
              applications using React, Next.js, Tailwind CSS,
              Express.js and MySQL with a focus on clean design
              and great user experience.

            </p>

            {/* CTA */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold shadow-xl shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:scale-105 active:scale-95 hover:shadow-blue-500/40"
              >

                View Projects

                <FaArrowRight className="group-hover:translate-x-1 transition" />

              </a>

              <a
                href="/DENNIS-CV.pdf"
                download="DENNIS-CV.pdf"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-white/5 hover:scale-105 active:scale-95"
              >

                <FaDownload />

                Download CV

              </a>

            </div>

            {/* Social */}

            <div className="flex items-center gap-6 mt-10">

              <a
                href="https://github.com/dnnali20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 hover:scale-125"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/dennis-ali-fadillah-35b761420/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mt-10">

             {techStack.map((tech, index) => (
               <motion.span
               initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  delay: 1 + index * 0.1,
}}
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white hover:-translate-y-1"
                >
                  {tech}
                </motion.span>
              ))}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-14 max-w-lg">

              {stats.map((item) => (

                <div key={item.label}>

                  <h3 className="text-3xl font-bold text-white">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-sm text-slate-500">

                    {item.label}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>

         {/* ================= RIGHT ================= */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.2,
  }}
  onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
  className="relative flex justify-center lg:justify-end"
>

 <motion.div
  className="relative"
  style={{
    rotateX,
    rotateY,
    transformPerspective: 1200,
  }}
>

    <motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute -inset-6 rounded-full border border-dashed border-blue-500/20"
/>

<motion.div
  animate={{
    rotate: -360,
  }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute -inset-12 rounded-full border border-cyan-500/10"
/>

<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    repeat: Infinity,
    duration: 12,
    ease: "linear",
  }}
  className="absolute inset-0"
>
  <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]" />
</motion.div>

    {/* Background Glow */}

    <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-[120px]" />

    {/* Gradient Border */}

   <div className="relative">

  {/* Glow */}

  <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-[120px]" />

  {/* Gradient Border */}

 <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 p-[3px] shadow-[0_30px_120px_rgba(59,130,246,0.35)]">

    {/* Background */}

    <div className="w-full h-full rounded-full bg-slate-950 p-3">

      <img
        src="/image/profile.png"
        alt="Dennis Ali Fadillah"
        loading="eager"
        className="
          w-full
          h-full
          rounded-full
          object-cover
          transition-all
          duration-700
          hover:scale-105
          hover:brightness-110
        "
      />

    </div>

  </div>

</div>

    {/* Card 1 */}

    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
     className="
hidden
lg:block
absolute
-left-10
top-16
        rounded-2xl
        border
        border-white/20
        bg-slate-900/55
        backdrop-blur-xl
        px-6
        py-4
        shadow-xl
      "
    >

      <p className="text-xs uppercase tracking-wider text-slate-400">

        Frontend

      </p>

      <h3 className="mt-1 font-semibold text-white">

        React • Next.js

      </h3>

    </motion.div>

    {/* Card 2 */}

    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="
        hidden
        lg:block
        absolute
        -right-8
bottom-20
        rounded-2xl
        border
        border-white/20
        bg-slate-900/55
        backdrop-blur-xl
        px-6
        py-4
        shadow-xl
      "
    >

      <p className="text-xs uppercase tracking-wider text-slate-400">

        Status

      </p>

      <h3 className="mt-1 font-semibold text-green-400">

        Open to Internship

      </h3>

    </motion.div>

    {/* Experience Badge */}

    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="
        hidden
        lg:flex
        absolute
        left-1/2
        -bottom-6 
        -translate-x-1/2
        items-center
        gap-3
        rounded-full
        border
        border-white/20
        bg-slate-900/90
        backdrop-blur-xl
        px-6
        py-3
        shadow-xl
      "
    >

      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

      <span className="text-sm text-slate-300">

        Available for new opportunities

      </span>

    </motion.div>

  </motion.div>

</motion.div>

</div>

      </div>

      {/* ================= Scroll Indicator ================= */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Scroll
        </span>

        <div className="h-14 w-[2px] rounded-full bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.a>
    </section>
  );
}

export default Hero;