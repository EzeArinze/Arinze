import { motion } from "framer-motion";
import React from "react";

function SkillsSection() {
  return (
    <section id="skills" className="py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-light mb-8">Frontend</h3>
              <div className="space-y-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                ].map((skill) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-lg font-light">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-8">Backend</h3>
              <div className="space-y-4">
                {["Supabase", "MongoDB", "Auth.js", "Better Auth"].map(
                  (skill) => (
                    <div key={skill} className="group">
                      <div className="flex justify-between items-center py-4 border-b border-border">
                        <span className="text-lg font-light">{skill}</span>
                        <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-light mb-8">Tools & Platforms</h3>
              <div className="space-y-4">
                {["Git", "Vercel", "Netlify"].map((skill) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-lg font-light">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-8">Other</h3>
              <div className="space-y-4">
                {[
                  "Responsive Design",
                  "Performance Optimization",
                  "Accessibility",
                  "CMS Integration",
                ].map((skill) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between items-center py-4 border-b border-border">
                      <span className="text-lg font-light">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
