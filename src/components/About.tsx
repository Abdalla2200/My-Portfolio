import { highlights } from "../constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="container py-sectionPadding my-sectionMargine">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="text-center lg:text-start">
            <span className="text-accent text-xl font-medium tracking-wider uppercase">
              About Me
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-start text-4xl md:text-5xl font-bold leading-tight   text-accent"
          >
            A frontend developer
            <span className=" text-white">
              {" "}
              focused on learning by building.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 text-muted text-center lg:text-start "
          >
            <p>
              I'm a self-taught frontend developer with a focus on React,
              TypeScript, and modern frontend development.
            </p>
            <p>
              I've built projects ranging from responsive landing pages to
              full-stack applications using APIs, state management,
              authentication, and CMS backends.
            </p>
            <p>
              I'm currently expanding my skills through the Digital Egypt
              Pioneers Initiative (DEPI), while continuing to build projects and
              strengthen my understanding of frontend development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-6 glow-border"
          >
            <p className="text-lg font-medium text-center lg:text-start text-primary-tx italic">
              "I learn best by building, breaking things, fixing them, and
              understanding why they work."
            </p>
          </motion.div>
        </div>

        {/* Right Column - Hilights */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 hover:bg-accent/20 duration-100">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
