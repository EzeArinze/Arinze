import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Github className="mr-2 h-4 w-4" />
          Code
        </Button>
        <Button size="sm" className="flex-1">
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
}
