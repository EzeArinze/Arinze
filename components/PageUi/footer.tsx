import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-12 border-t border-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-light text-card-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Nuel. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <Link
              href="#"
              className="text-sm font-light text-card-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-light text-card-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
