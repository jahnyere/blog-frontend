import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold text-gray-900"
          >
            The Next Chapter
          </a>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Career
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Tech
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            AI
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>

          <a
            href="#"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
          >
            Write
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Sign In
          </a>
        </nav>



        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 border-t pt-4 space-y-4">
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors ">
              Home
            </a>

            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Career
            </a>

            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Tech
            </a>

            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              AI
            </a>

            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>

            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Write
            </a>

            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </a>
          </div>
        )}

          <button
            type="button"
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
