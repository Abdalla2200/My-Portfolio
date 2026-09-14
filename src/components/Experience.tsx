import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="container py-sectionPadding my-sectionMargine"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <SectionHeading title="Experience" />

        <h2 className="text-3xl font-bold sm:text-4xl">My Experience</h2>

        <p className="mx-auto text-lg mt-4 max-w-2xl text-muted">
          Practical experience building frontend applications and developing
          modern web interfaces.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass mx-auto max-w-4xl rounded-2xl p-6 sm:p-8"
      >
        <div className="flex flex-col gap-6 sm:flex-row">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Code2 size={24} />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>

                <p className="mt-1 text-primary">
                  Digital Egypt Pioneers Initiative — DEPI
                </p>
              </div>

              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-accent">
                2026 – Present
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Developing responsive frontend applications using React,
                TypeScript, JavaScript, HTML, CSS, and Bootstrap.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Building reusable components and user interfaces following
                frontend best practices.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Working with Git and GitHub for version control and
                collaborative development.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Applying responsive design and UX/UI principles to create
                user-friendly web interfaces.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
