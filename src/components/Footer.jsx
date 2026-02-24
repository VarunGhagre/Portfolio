import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/VarunGhagre",
      color: "#f5f5f5",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/varun-ghagre-570190222/",
      color: "#0a66c2",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      link: "https://x.com/varun_ghagre",
      color: "#1da1f2",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com/knownasvarun_",
      color: "#e1306c",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div
        className="max-w-7xl mx-auto px-3 py-3
                   flex flex-col md:flex-row
                   items-center justify-between gap-4"
      >
        {/* LEFT: COPYRIGHT */}
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Varun Ghagre. All rights reserved.
        </p>

        {/* RIGHT: SOCIAL ICONS */}
        <div className="flex gap-4">
          {socials.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                {/* Glow */}
                <span
                  className="absolute inset-0 rounded-full opacity-0
                             group-hover:opacity-100 transition"
                  style={{
                    boxShadow: `0 0 20px ${item.color}80`,
                  }}
                ></span>

                {/* Icon */}
                <div
                  className="relative z-10 p-2 rounded-full
                             bg-slate-900 border border-slate-800"
                >
                  <Icon size={18} color={item.color} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
