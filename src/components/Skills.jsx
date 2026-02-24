import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

// grid + circle card that matches your screenshot
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-slate-800/50 mb-6">
          <span className="text-sm text-slate-300">💼 How I Can Contribute & My Key Skills</span>
        </div>

        <h2 className="text-4xl md:text-3xl font-bold text-blue-200 mb-12">Technologies I Work With</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-10">
           {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                whileHover={{
                  y: -10,
                  scale: 1.08,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col items-center gap-4
                           p-6 rounded-2xl cursor-pointer"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
              >
                {/* Glow shadow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0
                             group-hover:opacity-100 transition duration-300"
                  style={{
                    boxShadow: `0 0 30px ${skill.color}55`,
                  }}
                ></div>

                {/* Icon */}
                <Icon
                  size={42}
                  color={skill.color}
                  className="relative z-10"
                />

                {/* Text */}
                <span className="relative z-10 text-sm font-medium text-slate-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
