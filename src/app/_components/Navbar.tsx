// components/Header.js

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../_components/ThemeToggle";
import Logo from "../../../public/images/black-logo.jpeg";

const Header = ({ heroRef, featuresRef, trainersRef, photosRef, footerRef }:any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (sectionRef:any) => {
    closeMenu();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-theme shadow-md z-50 animate-fadeInDown">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden">
                <Image src={Logo} alt="R D FIT WORLD Logo" width={70} height={70} className="object-cover" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-black dark:text-white flex items-baseline">
                <span className="relative mr-1 text-red-600 crack-text">RD</span>
                <span>FIT WORLD</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 sm:space-x-6">
            <span onClick={() => scrollToSection(heroRef)} className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Home</span>
            <span onClick={() => scrollToSection(featuresRef)} className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Classes</span>
            <span onClick={() => scrollToSection(trainersRef)} className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Trainers</span>
            <span onClick={() => scrollToSection(photosRef)} className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Photos</span>
            <span onClick={() => scrollToSection(footerRef)} className="hover:text-primary transition-colors hover:scale-105 cursor-pointer">Contact</span>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block theme">
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-lightBg dark:bg-darkBg text-center transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <span onClick={() => scrollToSection(heroRef)} className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Home
          </span>
          <span onClick={() => scrollToSection(featuresRef)} className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Classes
          </span>
          <span onClick={() => scrollToSection(trainersRef)} className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Trainers
          </span>
          <span onClick={() => scrollToSection(photosRef)} className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Photos
          </span>
          <span onClick={() => scrollToSection(footerRef)} className="block py-2 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors">
            Contact
          </span>

          {/* Mobile Theme Toggle - only visible when menu is open */}
          {isMenuOpen && (
            <div className="mt-4 theme">
              <ThemeToggle />
            </div>
          )}
        </div>
      </header>

      <style jsx>{`
        .crack-text::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 80%;
          height: 3px;
          background-color: currentColor;
          transform: translateX(-50%) rotate(-15deg);
        }
        .crack-text::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 80%;
          height: 3px;
          background-color: currentColor;
          transform: translateX(-50%) rotate(15deg);
        }
      `}</style>
    </>
  );
};

export default Header;
