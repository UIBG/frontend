import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin, FaLine } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/images/logo-footer-typography.png" className="h-20 mr-3" alt="Logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-6 text-center md:text-left md:justify-center">
            <div className="md:col-span-2">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">More</h2>
              <ul className="text-zinc-400 font-medium">
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/uibattlegrounds/" className="hover:underline">Latest Update</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-zinc-700 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <span className="text-sm text-zinc-400 text-center sm:text-left">© 2024 UI Battlegrounds. All Rights Reserved.</span>
          <div className="flex justify-center mt-4 sm:mt-0 gap-2">
            <a href="https://www.youtube.com/@uibattlegrounds" className="text-zinc-400 hover:text-white mr-5">
              <FaYoutube className="w-6 h-6" />
              <span className="sr-only">YouTube Channel</span>
            </a>
            <a href="https://www.instagram.com/uibattlegrounds/" className="text-zinc-400 hover:text-white mr-5">
              <FaInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram Account</span>
            </a>
            <a href="https://www.tiktok.com/@uibattlegrounds" className="text-zinc-400 hover:text-white mr-5">
              <FaTiktok className="w-6 h-6" />
              <span className="sr-only">Tiktok Account</span>
            </a>
            <a href="https://www.linkedin.com/company/uibg/" className="text-zinc-400 hover:text-white mr-5">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn Page</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
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