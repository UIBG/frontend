"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from 'react-icons/fa';
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Token:", token);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-primary fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo-navbar-typography.png" className="h-12" alt="Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600" 
            aria-controls="navbar-cta" 
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Menu Button</span>
            <FaBars className="w-10 h-10" />
          </button>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="hidden md:inline-flex text-white focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-6 py-2 text-center bg-red_primary hover:bg-red_secondary focus:ring-red_tertiary"
            >
              Logout
            </button>
          ) : (
            <Link href="/auth/login" className={`hidden md:inline-flex text-white focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-6 py-2 text-center bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-800`}>
              Login
            </Link>
          )}
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block text-center' : 'hidden'}`} id="navbar-cta">
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border rounded-lg bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-zinc-800 md:bg-primary border-zinc-700">
            <li>
              <Link href="/" className={`block py-2 px-3 md:p-0 rounded md:hover:text-zinc-500 text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700`} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
            </li>
            <li> 
              <Link href="/event" className={`block py-2 px-3 md:p-0 rounded md:hover:text-zinc-700 md:hover:text-zinc-500 text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700`} aria-current={pathname === '/event' ? 'page' : undefined}>Our Events</Link>
            </li>
            <li>
              <Link href="/about" className={`block py-2 px-3 md:p-0 rounded md:hover:text-zinc-700 md:hover:text-zinc-500 text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700`} aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
            </li>
            <li>
              <Link href="/contact" className={`block py-2 px-3 md:p-0 rounded md:hover:text-zinc-700 md:hover:text-zinc-500 text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700`} aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link>
            </li>
            {!isLoggedIn ? (
              <li className="md:hidden">
                <Link href="/auth/login" className="text-white focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-6 py-2 text-center bg-tertiary hover:bg-zinc-700 focus:ring-zinc-800">
                  Login
                </Link>
              </li>
            ) : (
              <li className="md:hidden">
                <button 
                  onClick={handleLogout} 
                  className="text-white focus:ring-4 focus:outline-none font-bold rounded-lg text-lg px-6 py-2 text-center bg-red_primary hover:bg-red_secondary focus:ring-red_tertiary"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
