import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="container py-sectionPadding my-sectionMargine"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <SectionHeading title="Education" />

        <h2 className="text-3xl font-bold sm:text-4xl">My Education</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-8"
      >
        <div className="flex gap-5">
          <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <GraduationCap size={24} />
          </div>

          <div>
            <p className="text-sm text-primary">6-Month Diploma</p>

            <h3 className="mt-1 text-xl font-semibold">
              Software Development Diploma
            </h3>

            <p className="mt-1 text-muted-foreground">
              Ministry of Communications and Information Technology (MCIT)
            </p>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              6-month professional diploma focused on software development and
              frontend web development.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
