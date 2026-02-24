import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

/* EXPERIENCE DATA */
const experiences = [
  {
    role: "Full Stack Developer Intern",
    duration: "2024 – Present",
    description:
      "Worked on MERN stack projects including real-time chat apps, social platforms, and e-commerce systems. Focused on clean code, APIs, and performance.",
  },
  {
    role: "Frontend Developer",
    duration: "2023 – 2024",
    description:
      "Built responsive UIs using React, Tailwind CSS, and modern UI libraries. Improved UX with animations and reusable components.",
  },
  {
    role: "Full Stack Developer – Real-Time Chat Application",
    duration: "2025",
    description:
      "Designed and developed a real-time chat application using the MERN stack and Socket.io. Implemented user authentication, one-to-one chats, message persistence, and real-time notifications with a focus on performance and scalability.",
  },
   {
    role: "Full Stack Developer – Social Media Application",
    duration: "2025",
    description:
      "Built a social media platform featuring user profiles, posts, likes, comments, and follow functionality. Worked on REST APIs, database schema design, and responsive UI using React and Tailwind CSS.",
  },
];

/* ANIMATION VARIANTS */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-slate-800">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-200"
        >
          Experience
        </motion.h2>

        {/* TIMELINE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l border-amber-800 pl-8 space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* DOT */}
              <span
                className="absolute -left-[42px] top-2 w-4 h-4 rounded-full
                           bg-blue-700"
              ></span>

              {/* CARD */}
              <div
                className="bg-slate-400 border border-slate-800
                           rounded-2xl p-6 transition-all
                           group-hover:border-pink-500
                           group-hover:shadow-[0_0px_0px_rgba(59,130,246,0.15)]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase size={18} className="text-blue-700" />
                  <h3 className="text-xl font-semibold">
                    {exp.role}
                  </h3>
                </div>


                <div className="flex items-center gap-2 text-xs text-slate-900 mb-4">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>

                <p className="text-slate-800 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
