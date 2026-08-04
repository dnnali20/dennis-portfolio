import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((item) => ({
        id: item.href.replace("#", ""),
        name: item.name,
      }));

      sections.forEach((section) => {
        const el = document.getElementById(section.id);

        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
  href="#home"
  className="group flex items-center gap-2 text-2xl font-black tracking-tight transition-all duration-300"
>
  <span className="text-white transition group-hover:text-blue-400">
    Dennis Portofolio
  </span>

  <span className="text-blue-500 transition group-hover:rotate-180 duration-500">
    ●
  </span>
</a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className={`group relative py-2 text-sm font-medium transition-all duration-300 ${
                active === item.name
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.name}

<span
  className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-blue-500 transition-all duration-300 ${
    active === item.name
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
/>

            </a>

          ))}

        </nav>

        {/* Social */}
        <div className="hidden lg:flex items-center gap-5">

          <a
            href="https://github.com/dnnali20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-blue-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/dennis-ali-fadillah-35b761420/"
            target="_blank"
            rel="noopener noreferrer"
           className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-blue-400"
          >
            <FaLinkedin size={20} />
          </a>

          <a
  href="#contact"
  className="ml-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
>
  Contact Me
</a>

        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden rounded-xl border border-white/10 bg-white/5 p-3 text-xl text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl"
          >

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col gap-6">

              {navLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                 className="rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-blue-400"
                >
                  {item.name}
                </a>

              ))}

              <div className="flex gap-5 pt-4">

                <a
                  href="https://github.com/dnnali20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-blue-400 hover:scale-110"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/dennis-ali-fadillah-35b761420/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:text-blue-400 hover:scale-110"
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Navbar;