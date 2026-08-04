import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
     className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_18px_rgba(59,130,246,0.8)]"
    />
  );
}

export default ScrollProgress;