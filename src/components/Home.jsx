import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import Stats from "./Stats";
import HeroBackground from "./HeroBackground";

export default function Home() {
  return (
    <section id="home" className="relative pt-47 pb-20 overflow-hidden">
      <HeroBackground />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}z
        className="relative max-w-7xl mx-auto px-6
                   grid md:grid-cols-2 gap-10 items-center"
      >
        {/* TEXT AREA */}
        <motion.div variants={fadeUp}>
          {/* 🔥 HEADING */}
          <motion.h1
            whileHover={{
              textShadow: "0px 0px 20px rgba(59,130,246,0.8)",
              letterSpacing: "0.02em",
            }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold leading-tight cursor-default"
          >
            Hi, I'm <span className="text-blue-500">Varun Ghagre</span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            whileHover={{ opacity: 1 }}
            className="mt-4 text-slate-200 max-w-lg"
          >
            Full Stack Developer | MERN | Always Learning
          </motion.p>

          <motion.p
            whileHover={{ opacity: 1 }}
            className="mt-4 text-slate-200 max-w-lg"
          >
            I build scalable web applications with clean code,{" "}
            <span className="text-blue-300">strong logic,</span> and a
            continuous focus on performance and learning.
          </motion.p>

          {/* 🔥 PREMIUM BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 20px rgba(59,130,246,0.9)",
            }}
            whileTap={{ scale: 0.94 }}
            className="relative mt-6 px-7 py-3 bg-blue-600
                       rounded-lg font-semibold overflow-hidden"
          >
            {/* SHINE EFFECT */}
            <span
              className="absolute inset-0
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)]
              translate-x-[-100%] hover:translate-x-[100%]
              transition-transform duration-700"
            ></span>

            <a href="/resume.pdf" download className="relative z-10">
              Download Resume
            </a>
          </motion.button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full
                  bg-blue-500/30 blur-xl"
            ></div>

            <div
              className="relative w-56 h-56 rounded-full overflow-hidden
                  border border-slate-700"
            >
              <img src="profile-img.png" alt="Profile" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Stats />
    </section>
  );
}
