import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px]
                   bg-blue-600/30 rounded-full blur-3xl"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px]
                   bg-purple-600/30 rounded-full blur-3xl"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px]
                   bg-cyan-500/20 rounded-full blur-3xl"
      />
    </div>
  );
}
