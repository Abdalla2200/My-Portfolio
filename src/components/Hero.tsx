import profilePic from "../assets/profile-image.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./UI/Button";
import { skills } from "../constants";
import DownloadCvBtn from "./UI/DownloadCvBtn";

export default function Hero() {
  return (
    <div className="container pb-sectionPadding mb-sectionMargine relative pt-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-center lg:text-start"
        >
          <div className="">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Frontend Developer • React
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ">
              Building <span className="text-accent glow-text">modern </span>
              <br />
              web interfaces
              <br />
              <span className=" text-white">with React.</span>
            </h1>
            <p className="text-lg text-muted max-w-lg mx-auto lg:mx-0">
              I'm Abdalla, a frontend developer focused on React, TypeScript,
              and Tailwind CSS. I enjoy turning designs and ideas into
              responsive, interactive web applications.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start  ">
            <a href="#contact">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <DownloadCvBtn />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start ">
            <span className="text-sm text-muted">Follow me: </span>
            {[
              { icon: FaGithub, href: "https://github.com/Abdalla2200" },
              {
                icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/abdalla-essam/",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-accent transition-all duration-300"
              >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </motion.div>
        {/* Right Column - Profile Image */}
        <div className="relatice ">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-[250px] md:max-w-[350px] lg:max-w-md mx-auto"
          >
            <div
              className="absolute inset-0 
        rounded-3xl bg-linear-to-br 
        from-accent/30 via-transparent 
        to-accent/10 blur-2xl"
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src={profilePic}
                alt="Abdalla Essam image"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-14"
      >
        <p className="text-xl text-muted mb-6 text-center">
          Technologies I work with
        </p>
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-32
       bg-linear-to-r from-background to-transparent z-10"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32
       bg-linear-to-l from-primary-bg to-transparent z-10"
          />
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted/50 hover:text-muted transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
