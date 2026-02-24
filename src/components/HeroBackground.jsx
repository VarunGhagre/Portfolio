import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [0, window.innerWidth], [-40, 40]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-40, 40]);

  return (
    <div
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      {/* 🌌 AURORA LAYER */}
      <motion.div
        style={{ x, y }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0
        bg-[linear-gradient(120deg,
        rgba(56,189,248,0.35),
        rgba(139,92,246,0.35),
        rgba(14,165,233,0.35))]
        bg-[length:200%_200%] blur-3xl"
      />

      {/* 🔥 GLOW ORB */}
      <motion.div
        style={{ x, y }}
        className="absolute top-[-20%] left-[-20%]
                   w-[500px] h-[500px]
                   bg-blue-600/40 rounded-full blur-[150px]"
      />

      {/* 🧩 GRID */}
      <div
        className="absolute inset-0 opacity-[0.08]
                   bg-[linear-gradient(to_right,#fff_1px,transparent_1px),
                   linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                   bg-[size:40px_40px]"
      />

      {/* DARK MASK */}
      <div className="absolute inset-0 bg-slate-950/65" />
    </div>
  );
}
