"use client";

import { useState } from "react";
import Header from "@/components/PageUi/header";
import SkillsSection from "@/components/PageUi/skills";
import Contact from "@/components/PageUi/contact";
import Footer from "@/components/PageUi/footer";
import Herosection from "@/components/PageUi/hero-section";
import About from "@/components/PageUi/about";
import ProjectSection from "@/components/PageUi/project-section";
import Navigation from "@/components/PageUi/navigation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen  bg-background ${
        menuOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Navigation Overlay */}
      <Navigation menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      {/* Header */}
      <Header menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <main>
        {/* Hero Section */}
        <Herosection />
        {/* About Section */}
        <About />
        {/* Projects Section */}
        <ProjectSection />
        {/* Skills Section */}
        <SkillsSection />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
