import { useState } from "react";
import {
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import GlowingLink from "./GlowingLink";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-navy text-light-pink shadow z-50 border-b border-muted-navy/50 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        {/* Logo */}
        <GlowingLink
          href="#"
          isLogo={true}
          lingerMs={500}
          className="flex items-center gap-2 text-xl text-light-pink"
          style={{
            textShadow: "0 0 15px rgba(20,184,255,0.8)",
          }}
        >
          <CodeBracketIcon
            className="w-8 h-8"
            style={{
              filter: "drop-shadow(0 0 6px rgba(20,184,255,0.7))",
            }}
          />
          <span className="logo-text">dev_by_derola |</span>
        </GlowingLink>

        {/* Desktop Nav Links */}
        <div className="space-x-4 hidden md:flex">
          <GlowingLink href="#mission">
            Mission
          </GlowingLink>
          <GlowingLink href="#skills">
            Skills
          </GlowingLink>
          <GlowingLink href="#projects">
            Projects
          </GlowingLink>
          <GlowingLink href="#contact">
            Contact
          </GlowingLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-light-pink" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-light-pink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy px-6 pb-4 space-y-2">
          <a href="#mission" className="block hover:text-hot-pink">
            Mission
          </a>
          <a href="#skills" className="block hover:text-hot-pink">
            Skills
          </a>
          <a href="#projects" className="block hover:text-hot-pink">
            Projects
          </a>
          <a href="#contact" className="block hover:text-hot-pink">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
