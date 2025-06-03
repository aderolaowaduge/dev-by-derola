function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-navy text-main-white py-6">
      <div className="max-w-6xl mx-auto text-center text-sm px-4">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Aderola Owaduge · All rights reserved.
        </p>
        <p className="mt-2">
          Designed & built with <span className="text-light-pink">passion</span> and <span className="text-light-pink">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
