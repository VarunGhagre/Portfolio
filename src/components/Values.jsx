import { motion } from "framer-motion";
import { Lightbulb, Code2, TrendingUp, Users } from "lucide-react";

const values = [
  {
    title: "Problem Solving",
    icon: Lightbulb,
    description:
      "I enjoy breaking down complex problems and turning them into simple, effective solutions.",
  },
  {
    title: "Clean Code",
    icon: Code2,
    description:
      "Writing readable, maintainable, and scalable code is always my top priority.",
  },
  {
    title: "Continuous Learning",
    icon: TrendingUp,
    description:
      "Technology evolves fast, and I believe in learning, adapting, and improving every day.",
  },
];

/* ANIMATIONS */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Values() {
  return (
    <section id="values" className="py-24 bg-slate-800 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-200"
        >
          What I Value
        </motion.h2>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-700
                           border border-slate-800 rounded-2xl p-6
                           transition-all
                           hover:border-blue-500"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl
                             bg-blue-600/10 opacity-0
                             group-hover:opacity-100 transition"
                ></div>

                {/* ICON */}
                <div
                  className="relative w-12 h-12 flex items-center justify-center
                             rounded-xl bg-blue-600/10 mb-4"
                >
                  <Icon className="text-blue-500" size={22} />
                </div>

                {/* TEXT */}
                <h3 className="relative text-lg font-semibold mb-2">
                  {val.title}
                </h3>
                <p className="relative text-sm text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
