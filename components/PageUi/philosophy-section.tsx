import { motion } from "framer-motion";
import React from "react";
import { DeveloperPhilosophy } from "../philosophy";

function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 md:py-40 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <DeveloperPhilosophy />
        </motion.div>
      </div>
    </section>
  );
}

export default PhilosophySection;
