import { ArrowUpRight } from "lucide-react";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div
      id="projects"
      className="container py-sectionPadding my-sectionMargine"
    >
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mx-auto max-w-3xl mb-16"
      >
        <span className="text-accent text-xl  font-medium tracking-wider uppercase ">
          Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-accent">
          Projects that
          <span className="font-normal text-white"> make an impact.</span>
        </h2>
        <p className="text-muted">
          A selection of my recent work — frontend projects I built while
          learning React, API integration, and responsive design.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group glass rounded-2xl overflow-hidden md:row-span-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
              />
              {/* Overlay Links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  className="p-3 rounded-full glass hover:bg-accent hover:text-primary-tx transition-all"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="w-5 h-5 
                  text-muted group-hover:text-accent
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="text-muted text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted hover:border-accent/50 hover:text-accent transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
