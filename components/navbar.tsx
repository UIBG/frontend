"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-zinc-200 dark:bg-zinc-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo-navbar-typography.png" className="h-12" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" 
            aria-controls="navbar-cta" 
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Menu Button</span>
            <FaBars className="w-10 h-10" />
          </button>
          <Link href="/auth/login" className={`hidden md:inline-flex text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-bold rounded-lg text-lg px-6 py-2 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800`}>
            Login
          </Link>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block text-center' : 'hidden'}`} id="navbar-cta">
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border border-zinc-100 rounded-lg bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
            <li>
              <Link href="/" className={`block py-2 px-3 md:p-0 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-700 md:dark:hover:text-zinc-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700`} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
            </li>
            <li>
              <Link href="/event" className={`block py-2 px-3 md:p-0 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-700 md:dark:hover:text-zinc-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700`} aria-current={pathname === '/event' ? 'page' : undefined}>Our Events</Link>
            </li>
            <li>
              <Link href="/about" className={`block py-2 px-3 md:p-0 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-700 md:dark:hover:text-zinc-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700`} aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
            </li>
            <li>
              <Link href="/contact" className={`block py-2 px-3 md:p-0 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-transparent md:hover:text-zinc-700 md:dark:hover:text-zinc-500 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-zinc-700`} aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link>
            </li>
            <li className="md:hidden">
              <Link href="/auth/login" className="text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-bold rounded-lg text-lg px-6 py-2 text-center dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
