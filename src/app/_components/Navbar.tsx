"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../_components/ThemeToggle";
import Logo from "../../../public/images/black-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); 
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-theme shadow-md z-50 animate-fadeInDown">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center space-x-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden">
              <Image src={Logo} alt="R D FIT WORLD Logo" width={70} height={70} className="object-cover" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-black dark:text-white">RD FIT WORLD</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-4 sm:space-x-6">
          <Link href="/" passHref>
            <span className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Home</span>
          </Link>
          <Link href="/" passHref>
            <span className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">About</span>
          </Link>
          <Link href="/" passHref>
            <span className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Classes</span>
          </Link>
          <Link href="/" passHref>
            <span className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Trainers</span>
          </Link>
          <Link href="/" passHref>
            <span className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Contact</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="theme">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 focus:outline-none text-black dark:text-white"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-lightBg dark:bg-darkBg text-center py-4 shadow-md transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/" passHref>
          <span
            onClick={closeMenu}
            className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
          >
            Home
          </span>
        </Link>
        <Link href="/about" passHref>
          <span
            onClick={closeMenu}
            className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
          >
            About
          </span>
        </Link>
        <Link href="/classes" passHref>
          <span
            onClick={closeMenu}
            className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
          >
            Classes
          </span>
        </Link>
        <Link href="/trainers" passHref>
          <span
            onClick={closeMenu}
            className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
          >
            Trainers
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span
            onClick={closeMenu}
            className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
          >
            Contact
          </span>
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 400px) {
          .theme {
            display:none
          }
       
        }
      `}</style>
    </header>
  );
};

export default Header;
