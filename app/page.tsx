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
import PhilosophySection from "@/components/PageUi/philosophy-section";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen  bg-background ${
        menuOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Navigation Overlay */}
      <Navigation
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      />

      {/* Header */}
      <Header
        menuOpen={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      />

      <main>
        <Herosection />
        <About />
        <ProjectSection />
        <SkillsSection />
        <PhilosophySection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
