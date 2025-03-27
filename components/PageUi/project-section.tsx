// import { motion } from "framer-motion";
// import React from "react";
// import { ProjectItem } from "../project-items";
// import { projects } from "@/utils/projects";

// function ProjectSection() {
//   return (
//     <section
//       id="projects"
//       className="py-32 md:py-40 bg-white container relative"
//     >
//       <div className="">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-24"
//         >
//           <h2 className="text-4xl md:text-5xl font-light tracking-tight">
//             Selected Projects
//           </h2>
//         </motion.div>

//         <div className="space-y-40">
//           {projects.map((project, index) => (
//             <ProjectItem key={project.id} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectSection;

"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "../project-items";
import { projects } from "@/utils/projects";

function ProjectSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatches

  return (
    <section id="projects" className="relative py-32 md:py-40 bg-white">
      <div className="container relative">
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

        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
