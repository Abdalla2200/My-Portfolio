import { motion } from "framer-motion";

export default function DownloadCvBtn() {
  return (
    <motion.a
      href="/My-Dev-CV.pdf"
      target="_blank"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <button
        className="
        px-8 py-4 
        text-lg
        rounded-full 
        font-medium 
        text-[#E6EDF3]
        border border-[#38BDF8]/40
        bg-secondary-bg/40
        backdrop-blur-md
        shadow-md shadow-black/30
        hover:border-[#38BDF8]
        hover:bg-[#1F2937]/60
        hover:text-[#38BDF8]
        transition-all duration-300
      "
      >
        View CV
      </button>
    </motion.a>
  );
}
