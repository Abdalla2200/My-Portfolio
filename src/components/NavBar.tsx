import { navLinks } from "../constants";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-4 fixed top-0 left-0 right-0 mb-10 z-50 glass "
    >
      <nav className="py-1 px-4 flex items-center gap-4 sm:gap-8 rounded-full w-fit mx-auto glass shadow-sm shadow-accent/40">
        {navLinks.map((link, i) => (
          <a
            key={i}
            className="py-1 px-4 text-primary-tx hover:text-accent duration-300 hover:bg-elevated-bg rounded-full"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
