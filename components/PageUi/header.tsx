import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
// import { ThemeToggle } from "../theme-toggle";
import { ModeToggle } from "./toggle";

interface HeaderProps {
  menuOpen: boolean;
  onClick: () => void;
}

function Header({ menuOpen, onClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 bg-background/80 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-light tracking-widest">
          NUEL
        </Link>
        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          <ModeToggle />
          <button
            onClick={onClick}
            className="z-50 flex items-center space-x-2 group"
            aria-label="Toggle menu"
          >
            <span className="text-sm uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <Menu className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
