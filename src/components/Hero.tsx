import profilePic from "../assets/profile-image.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./UI/Button";
import DownloadCvBtn from "./UI/DownloadCvBtn";

export default function Hero() {
  return (
    <div className="container pb-sectionPadding relative pt-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-center lg:text-start"
        >
          {/* Role Badge */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Frontend Developer • React • TypeScript
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building <span className="text-accent glow-text">responsive</span>
              <br />
              web interfaces
              <br />
              <span className="text-white">with React.</span>
            </h1>

            <p className="text-lg text-muted max-w-lg mx-auto lg:mx-0">
              I'm Abdalla, a frontend developer focused on React, TypeScript,
              and Tailwind CSS. I build responsive web applications and enjoy
              turning designs into clean, functional interfaces.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            <a href="#contact">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <DownloadCvBtn />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="text-lg text-muted">Connect:</span>

            {[
              {
                icon: FaGithub,
                href: "https://github.com/Abdalla2200",
                label: "GitHub",
              },
              {
                icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/abdalla-essam/",
                label: "LinkedIn",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-accent transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-62.5 md:max-w-87.5 lg:max-w-md mx-auto"
          >
            <div
              className="
                absolute inset-0
                rounded-3xl
                bg-linear-to-br
                from-accent/20 via-transparent
                to-accent/5
                blur-2xl
              "
            />

            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src={profilePic}
                alt="Abdalla Essam"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
