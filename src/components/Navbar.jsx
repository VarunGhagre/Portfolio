import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Download, Menu, X } from "lucide-react";
import { fadeUp } from "../animations";

const navItems = ["Home", "Skills", "Projects", "Experience", "Contact"];

const socials = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/varun-ghagre-570190222/",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    link: "https://github.com/VarunGhagre",
    color: "#f5f5f5",
  },
  {
    icon: FaTwitter,
    link: "https://x.com/varun_ghagre",
    color: "#1DA1F2",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com/knownasvarun_",
    color: "#E1306C",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-xl
                   border-b border-slate-800 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <h1 className="text-2xl font-bold text-blue-500">Varun</h1>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a href={`#${item.toLowerCase()}`} className="text-slate-300">
                  {item}
                </a>
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0
                             bg-blue-500 transition-all duration-300
                             group-hover:w-full"
                ></span>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            {socials.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
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

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2
                         bg-blue-600 rounded-lg hover:bg-blue-700
                         transition shadow-lg"
            >
              Resume <Download size={16} />
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg bg-slate-800"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-16 right-6 w-72
                       bg-slate-900/80 backdrop-blur-xl
                       border border-slate-800
                       rounded-2xl shadow-2xl
                       z-50 md:hidden"
          >
            {/* CLOSE */}
            <div className="flex justify-end p-3">
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-4 px-6 pb-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 font-medium
                             hover:text-blue-500 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-4 p-4 border-t border-slate-800">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="relative group"
                  >
                    <span
                      className="absolute inset-0 rounded-full opacity-0
                     group-hover:opacity-100 transition"
                      style={{
                        boxShadow: `0 0 18px ${item.color}80`,
                      }}
                    ></span>

                    <div
                      className="relative z-10 p-3 rounded-full
                        bg-slate-900 border border-slate-800"
                    >
                      <Icon size={15} color={item.color} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
