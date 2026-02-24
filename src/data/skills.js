import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiLinux,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { Brain } from "lucide-react";

export const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3c873a" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Java", icon: FaJava, color: "#e76f00" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Linux", icon: SiLinux, color: "#fcc624" },
  { name: "Git & GitHub", icon: SiGit, color: "#f05032" },
  { name: "DSA", icon: Brain, color: "#a855f7" },
];
