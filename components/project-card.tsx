// import Image from "next/image";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   tags: string[];
//   image: string;
// }

// export function ProjectCard({
//   title,
//   description,
//   tags,
//   image,
// }: ProjectCardProps) {
//   return (
//     <Card className="overflow-hidden flex flex-col h-full">
//       <div className="relative h-48 w-full">
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <CardContent className="flex-1 p-6">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-muted-foreground mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2 mt-auto">
//           {tags.map((tag) => (
//             <Badge key={tag} variant="secondary">
//               {tag}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="border-t p-6 flex gap-2">
//         <Button variant="outline" size="sm" className="flex-1">
//           <Github className="mr-2 h-4 w-4" />
//           Code
//         </Button>
//         <Button size="sm" className="flex-1">
//           <ExternalLink className="mr-2 h-4 w-4" />
//           Demo
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

"use client";

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

interface ProjectCardAltProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardAltProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group mb-32 last:mb-0"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
          index % 2 === 0 ? "" : "md:grid-flow-dense"
        }`}
      >
        {/* Image */}
        <div className="relative h-[50vh] overflow-hidden rounded-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition-colors duration-300" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h3 className="text-3xl font-light">{project.title}</h3>
          <p className="text-lg font-light text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded"
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
    </motion.div>
  );
}
