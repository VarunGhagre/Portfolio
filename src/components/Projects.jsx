import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real-Time Chat Application 💬",
    description:
      "A real-time chat application using MERN stack with Socket.io for instant messaging and authentication.",
    code: "https://github.com/VarunGhagre/Chat-App",
    live: "https://chat-app-pi-ecru.vercel.app/",
  },
  {
    title: "StayFinder 🏨",
    description:
      "Developed a full-stack MERN hotel booking platform with secure authentication, property listings, responsive UI, and real-time booking management.",
    code: "https://github.com/VarunGhagre/stayfinder",
    live: "https://stayfinder-blue.vercel.app/",
  },
  {
    title: "Social Media Application 📱",
    description:
      "A full-featured social media platform with posts, likes, comments, follow system, and user profiles.",
    code: "https://github.com/varunghagre/social-media-app",
    live: "#",
  },
  {
    title: "Password Manager 🔐",
    description:
      "A secure password manager to store and manage credentials with encryption and authentication.",
    code: "https://github.com/VarunGhagre/Password-Manager",
    live: "#",
  },
  {
    title: "🏦 Bank Management System (Java)",
    description:
      "Desktop-based banking application with account management, transactions, balance enquiry and secure database connectivity using JDBC.",
    code: "https://github.com/VarunGhagre/BankManagement",
    live: "#",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "A complete e-commerce platform with product listing, cart, payment integration, and admin panel.",
    code: "https://github.com/varunghagre/ecommerce-web",
    live: "#",
  },
  {
    title: "Portfolio Website 🚀",
    description:
      "A modern, animated, and responsive developer portfolio built with React, Tailwind CSS, and Framer Motion.",
    code: "https://github.com/varunghagre/portfolio",
    live: "https://varun-portfolio-five.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-blue-200">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="relative bg-slate-700 rounded-2xl p-6
                         border border-slate-700
                         hover:border-blue-500 transition"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl
                              bg-blue-600/10 opacity-0
                              hover:opacity-100 transition"></div>

              <h3 className="relative text-xl font-semibold">
                {project.title}
              </h3>

              <p className="relative text-slate-400 mt-3 text-sm">
                {project.description}
              </p>

              <div className="relative flex items-center gap-4 mt-6">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm
                             text-blue-400 hover:text-blue-300"
                >
                  <Github size={16} /> View Code
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm
                               text-green-400 hover:text-green-300"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
