import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const stats = [
  "350+ Problems Solved",
  "10+ Projects Completed",
  "1+ Year Experience",
  "99% Learning Focus",
];

export default function Stats() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
      {stats.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -6, scale: 1.03, boxShadow: "0px 10px 10px rgb(39, 88, 177)"}}
          className="bg-slate-900 p-6 rounded-xl text-center text-blue-200"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
