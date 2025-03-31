import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
              Contact
            </h2>
            <div className="space-y-6 text-lg font-light text-muted-foreground">
              <p>
                I&apos;m currently available for freelance work and new
                opportunities. If you have a project that needs some creative
                direction, I&apos;d love to hear about it.
              </p>
              <p>
                Feel free to reach out through any of the platforms below or
                directly via email.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link
                  href="mailto:hello@ezearinze2244@gmail.com"
                  className="flex items-center space-x-4 py-2"
                >
                  <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    hello@nuel.dev
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link
                  href="linkedin.com/in/eze-arinze-arz"
                  className="flex items-center space-x-4 py-2"
                >
                  <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    LinkedIn
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link
                  href="https://github.com/EzeArinze"
                  className="flex items-center space-x-4 py-2"
                >
                  <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    GitHub
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link
                  href="https://x.com/Emmanuelrinz2"
                  className="flex items-center space-x-4 py-2"
                >
                  <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                  <span className="text-lg font-light group-hover:text-primary transition-colors duration-300">
                    Twitter
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[50vh] bg-muted"
          >
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              ✉️
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
