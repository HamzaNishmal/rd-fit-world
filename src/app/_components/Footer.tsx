"use client";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/images/black-logo.jpeg";
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa'; 

const Footer = ({ contactNumbers = ["99468 08011", "73063 28287"], email = "rdfitworld@gmail.com" }) => {
  return (
    <footer className="bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-theme py-12 px-5 md:px-20 lg:px-40">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-fadeInUp">
        <div>
          <Link href="/">
            <div className='w-[80px] rounded-full truncate mb-5'>
              <Image src={Logo} alt="logo" />
            </div>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            Your ultimate destination for fitness, health, and well-being. Get
            fit with our professional trainers and state-of-the-art equipment.
          </p>
          <p className="text-gray-400 dark:text-gray-500">
            Join us today to start your fitness journey!
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-8 animate-fadeInUp text-black dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
              <Link href="#">Classes Details</Link>
            </li>
            <li className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
              <Link href="#">Training Profiles</Link>
            </li>
            <li className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
              <Link href="#">F.A.Q</Link>
            </li>
            <li className="hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
              <Link href="#">Leave a Message</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-8 animate-fadeInUp text-black dark:text-white">
            Contact Us
          </h4>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Reach out for any inquiries or membership details:
          </p>

          {contactNumbers.map((number, index) => (
            <p key={index} className="text-xl font-semibold mb-4 animate-fadeInUp text-black dark:text-white">
              <a href={`tel:${number}`} className="hover:text-primary dark:hover:text-primary-light transition-colors">
                {number}
              </a>
            </p>
          ))}

          <h4 className="text-xl font-semibold mb-8 animate-fadeInUp text-black dark:text-white">
            Follow Us
          </h4>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/rd_fitworld/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-transform duration-300 transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/rasheed.vellat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-transform duration-300 transform hover:scale-110"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-transform duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm dark:text-gray-400 border-t border-gray-200 dark:border-gray-600 pt-5">
        <p>&copy; 2023 RD FIT WORLD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
