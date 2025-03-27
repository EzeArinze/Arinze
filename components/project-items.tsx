"use client";

// import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  tags: string[];
  image: string;
}

interface ProjectItemProps {
  project: Project;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  // const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      // ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div
          className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-primary transition-colors duration-300" />
              <span className="text-sm uppercase tracking-widest text-neutral-500">
                {project.year}
              </span>
            </div>

            <h3 className="text-3xl font-light">{project.title}</h3>
            <p className="text-lg font-light text-neutral-700">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <Link
                href="#"
                className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest group-hover:text-primary transition-colors duration-300"
              >
                <span>View Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`relative h-[50vh] overflow-hidden  rounded ${
            index % 2 === 0 ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 rounded"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
