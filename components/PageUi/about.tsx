import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
              About
            </h2>
            <div className="space-y-6 text-lg font-light text-muted-foreground">
              <p>
                I&apos;m a passionate software developer specializing in
                frontend technologies with a strong foundation in modern
                JavaScript frameworks.
              </p>
              <p>
                With expertise in React, Next.js, and TypeScript, I create
                intuitive and responsive user interfaces that deliver
                exceptional digital experiences.
              </p>
              <p>
                My approach combines technical excellence with creative
                problem-solving. I&apos;m dedicated to writing clean,
                maintainable code and staying current with the latest industry
                trends and best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[70vh] bg-muted rounded"
          >
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
