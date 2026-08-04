import Reveal from "../components/Reveal";
import SectionBackground from "../components/SectionBackground";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-24 lg:py-32"
    >

    <SectionBackground />
      <div className="site-container">

        {/* Heading */}

       <Reveal className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">

            CONTACT

          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">

            Let's Work

            <br />

            <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">

              Together

            </span>

          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-400">

            Have a project or internship opportunity?
            Feel free to reach out.
            I'd love to connect with you.

          </p>

        </Reveal>

        <Reveal
  delay={0.2}
  className="mt-20 grid gap-8 lg:grid-cols-2"
>
  <div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,0.22)]">
  <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>

<h3 className="text-3xl font-bold">

Let's Connect

</h3>

<p className="mt-5 leading-8 text-slate-400">

Currently looking for internship opportunities
and exciting projects.

</p>

<div className="mt-10 space-y-8">

<div>

<p className="text-sm uppercase tracking-[0.3em] text-blue-400">

Email

</p>

<a
  href="mailto:delif4.2010@gmail.com"
  className="mt-2 inline-block text-lg transition hover:text-blue-400"
>
  delif4.2010@gmail.com
</a>

</div>

<div>

<p className="text-sm uppercase tracking-[0.3em] text-blue-400">

Location

</p>

<p className="mt-2 text-lg">

Indonesia

</p>

</div>

<div>

<p className="text-sm uppercase tracking-[0.3em] text-blue-400">

GitHub

</p>

<a
  href="https://github.com/dnnali20"
  target="_blank"
  rel="noreferrer"
  className="mt-2 inline-block text-lg transition hover:text-blue-400"
>
  github.com/dnnali20
</a>

</div>

<div>

<p className="text-sm uppercase tracking-[0.3em] text-blue-400">

LinkedIn

</p>

<a
  href="https://linkedin.com/in/dennis-ali-fadillah-35b761420"
  target="_blank"
  rel="noreferrer"
  className="mt-2 inline-block text-lg transition hover:text-blue-400"
>
  linkedin.com/in/dennis-ali-fadillah
</a>
</div>

</div>

</div>

<div className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_30px_80px_rgba(59,130,246,0.22)]">
<div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blue-500/10 blur-3xl"></div>

<form className="space-y-6">

<input
type="text"
placeholder="Your Name"
className="w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>

<input
type="email"
placeholder="Your Email"
className="w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>

<textarea
rows={6}
placeholder="Your Message"
className="w-full rounded-xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
/>

<button
className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 active:scale-95"
>

Send Message

</button>

</form>

</div>

</Reveal>



      </div>

    </section>
  );
}

export default Contact;