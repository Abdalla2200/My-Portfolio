import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { services } from "../constants";
import SectionHeading from "./UI/SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="container py-sectionPadding my-sectionMargine"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <SectionHeading title="Services" />

        <h2 className="text-3xl font-bold sm:text-4xl">What I Can Do</h2>

        <p className="mx-auto text-lg mt-4 max-w-2xl text-muted">
          Frontend services focused on building responsive and functional web
          experiences.
        </p>
      </motion.div>

      {/* Services */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Decorative glow */}
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-ccent/20" />

              {/* Icon */}
              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-accent/20">
                  <Icon
                    size={23}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
