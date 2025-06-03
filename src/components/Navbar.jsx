import { CodeBracketIcon } from '@heroicons/react/24/solid'; // solid icon style

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-navy text-light-pink shadow z-50 border-b border-muted-navy/50 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2 text-xl hover:text-hot-pink">
          <CodeBracketIcon className="w-8 h-8" />
          <span className="logo-text">dev_by_derola |</span>
        </a>
        <div className="space-x-4 hidden md:flex">
          <a href="#mission" className="hover:text-hot-pink">Mission</a>
          <a href="#skills" className="hover:text-hot-pink">Skills</a>
          <a href="#projects" className="hover:text-hot-pink">Projects</a>
          <a href="#contact" className="hover:text-hot-pink">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
