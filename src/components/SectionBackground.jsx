function SectionBackground() {
  return (
    <>
      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

      {/* Noise */}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Glow Top Right */}

      <div className="absolute top-24 right-32 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Glow Bottom Left */}

      <div className="absolute bottom-24 left-24 h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Big Glow Left */}

      <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[180px]" />

      {/* Big Glow Right */}

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

      {/* Center Glow */}

      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[200px]" />
    </>
  );
}

export default SectionBackground;