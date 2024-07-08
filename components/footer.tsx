import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaLine } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="#" className="h-20 mr-3" alt="Logo" />
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">UI Battlegrounds</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-6 text-center md:text-left md:justify-center">
            <div className="md:col-span-2">
              <h2 className="mb-6 text-sm font-semibold text-zinc-900 uppercase dark:text-white">More</h2>
              <ul className="text-zinc-500 dark:text-zinc-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">uibg</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">uibg</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <span className="text-sm text-zinc-500 text-center sm:text-left dark:text-zinc-400">© 2024 UI Battlegrounds. All Rights Reserved.</span>
          <div className="flex justify-center mt-4 sm:mt-0 gap-2">
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white mr-5">
              <FaYoutube className="w-6 h-6" />
              <span className="sr-only">YouTube Channel</span>
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white mr-5">
              <FaInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram Account</span>
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white mr-5">
              <FaTiktok className="w-6 h-6" />
              <span className="sr-only">Tiktok Account</span>
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white mr-5">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn Page</span>
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              <FaLine className="w-6 h-6" />
              <span className="sr-only">Line Official Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;