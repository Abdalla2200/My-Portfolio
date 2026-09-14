import { Code2, Palette, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { skillCategories } from "../constants";
import SectionHeading from "./UI/SectionHeading";

const categoryIcons = {
  Frontend: Code2,
  "Styling & UI": Palette,
  "Backend & APIs": Server,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="container py-sectionPadding my-sectionMargine"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <SectionHeading title="Skills" />

        <h2 className="text-3xl font-bold sm:text-4xl">
          Technologies I Work With
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const Icon =
            categoryIcons[category.title as keyof typeof categoryIcons];

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass group rounded-2xl p-6 transition-all duration-300  hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon
                    size={23}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-lg border border-border/50 bg-background/40 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:shadow-sm hover:shadow-accent/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
