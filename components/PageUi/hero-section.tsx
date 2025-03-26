import { AnimatePresence, motion } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { HeroScene } from "../hero-scene";

function Herosection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-10">
        <HeroScene />
      </div>

      <div className="container relative z-20">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-6">
              Frontend Developer
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide text-neutral-700 max-w-xl">
              Creating exceptional digital experiences with modern web
              technologies and a focus on detail.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <Button
                variant="outline"
                className="rounded-none border-neutral-300 text-sm uppercase tracking-widest px-8 py-6 hover:bg-black hover:text-white transition-all duration-300"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-12 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-16 bg-neutral-300 mb-4 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Herosection;
