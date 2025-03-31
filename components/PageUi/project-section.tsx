import { motion } from "framer-motion";
import React from "react";
// import { ProjectItem } from "../project-items";
import { projects } from "@/utils/projects";
import { ProjectGrid } from "../project-grid";
import { ProjectCard } from "../project-card";

function ProjectSection() {
  const useGridLayout = true;

  return (
    <section id="projects" className="py-32 md:py-40 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        {useGridLayout ? (
          <ProjectGrid projects={projects} />
        ) : (
          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
