import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface NavigationProps {
  menuOpen: boolean;
  onClick: () => void;
}

function Navigation({ menuOpen, onClick }: NavigationProps) {
  return (
    <div
      className={`fixed inset-0  bg-background z-40 transition-transform duration-700 ease-in-out ${
        menuOpen ? "translate-y-0" : "translate-x-full"
      }`}
    >
      <div className="container h-full flex flex-col justify-center items-center">
        <nav className="flex flex-col items-center space-y-8">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ duration: 0.5, delay: menuOpen ? 0.2 : 0 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-4xl font-light tracking-wider hover:text-primary transition-colors duration-300"
                onClick={onClick}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="absolute bottom-12 left-0 right-0 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.5, delay: menuOpen ? 0.6 : 0 }}
        >
          <Link
            href="#"
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300"
          >
            Twitter
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Navigation;
