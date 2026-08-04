import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black tracking-tight">

              Dennis<span className="text-blue-500">.</span>

            </h2>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">

              Frontend Developer passionate about
              building modern, responsive, and
              user-friendly web applications.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-lg font-semibold">

              Navigation

            </h3>

            <div className="mt-6 flex flex-col gap-3">

              <a href="#home" className="text-slate-400 hover:text-blue-400 transition">
                Home
              </a>

              <a href="#about" className="text-slate-400 hover:text-blue-400 transition">
                About
              </a>

              <a href="#skills" className="text-slate-400 hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="text-slate-400 hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#contact" className="text-slate-400 hover:text-blue-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-lg font-semibold">

              Connect

            </h3>

            <div className="mt-6 flex gap-5">

              <a
                href="https://github.com/dnnali20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/dennis-ali-fadillah-35b761420/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>

            <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} Dennis Ali Fadillah.
            All Rights Reserved.

          </p>

          <p className="flex items-center gap-2">

            Built with React & Tailwind

            <FaHeart className="text-red-500" />

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;