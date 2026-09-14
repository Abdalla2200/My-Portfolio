import { highlights } from "../constants";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";

export default function About() {
  return (
    <div id="about" className="container py-sectionPadding my-sectionMargine">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="text-center lg:text-start">
            <SectionHeading title="About Me" />
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-start text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            A <span className="text-accent">frontend</span> developer focused on
            learning by building.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 text-muted text-center lg:text-start "
          >
            <p>
              I'm a self-taught frontend developer focused on React, TypeScript,
              and building responsive web applications.
            </p>
            <p>
              I've built projects ranging from responsive landing pages to
              full-stack applications, working with APIs, state management,
              authentication, and CMS backends.
            </p>
            <p>
              I'm currently a React Frontend Trainee in the Digital Egypt
              Pioneers Initiative (DEPI), where I'm strengthening my frontend
              skills while continuing to learn through practical projects.
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
