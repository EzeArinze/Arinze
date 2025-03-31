"use client";

import { TiltedScroll } from "./ui/title-scroll";

export function DeveloperPhilosophy() {
  const philosophyItems = [
    { id: "1", text: "User-Centered Design" },
    { id: "2", text: "Clean, Maintainable Code" },
    { id: "3", text: "Performance Optimization" },
    { id: "4", text: "Responsive & Accessible" },
    { id: "5", text: "Test-Driven Development" },
    { id: "6", text: "Continuous Learning" },
    { id: "7", text: "Collaborative Approach" },
    { id: "8", text: "Attention to Detail" },
    { id: "9", text: "Problem Solving" },
    { id: "10", text: "Agile Methodology" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            My Development Philosophy
          </h2>
          <p className="text-muted-foreground mb-6">
            As a developer, I believe in creating solutions that are not just
            functional, but also maintainable, scalable, and delightful to use.
            Here are the principles that guide my work:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
              <div>
                <h3 className="font-medium mb-1">User-Centered Approach</h3>
                <p className="text-muted-foreground">
                  I prioritize the end-user experience in every decision,
                  ensuring intuitive interfaces and smooth interactions.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
              <div>
                <h3 className="font-medium mb-1">Technical Excellence</h3>
                <p className="text-muted-foreground">
                  I write clean, well-documented code that&apos;s easy to
                  maintain and extend, following best practices and design
                  patterns.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5" />
              <div>
                <h3 className="font-medium mb-1">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  I&apos;m committed to learning new technologies and refining
                  my skills to deliver increasingly better solutions.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex justify-center relative">
          <TiltedScroll items={philosophyItems} />
        </div>
      </div>
    </div>
  );
}
