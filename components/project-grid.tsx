"use client";

import { useState } from "react";
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

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative flex flex-col overflow-hidden rounded-lg"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-white/70 group-hover:bg-primary transition-colors duration-300" />
              <span className="text-xs uppercase tracking-widest text-white/80">
                {project.year}
              </span>
            </div>

            <h3 className="text-2xl font-light mb-2">{project.title}</h3>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: hoveredId === project.id ? "auto" : 0,
                opacity: hoveredId === project.id ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm font-light text-white/90 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white/10 text-white/90 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white hover:text-primary transition-colors duration-300"
              >
                <span>View Project</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
