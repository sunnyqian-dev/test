'use client'; // This is necessary for client-side components like handling state and events

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile navigation
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Close the mobile navigation
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav>
      <div className="mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
        <Link href="/">
          <img src="/logo.jpeg" alt="logo" className="w-14 h-14 mr-4" />
          </Link>
          <Link href="/" className="text-2xl font-bold no-underline">FlexiBuilder</Link>
        </div>
        <button
          className="text-gray-800 focus:outline-none md:hidden flex justify-center items-center p-3 rounded-lg hover:bg-gray-200"
          onClick={toggleNavbar}
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 z-50 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 overflow-auto`}
          onClick={closeNavbar}
        >
          <div className="absolute top-0 right-0 w-64 bg-gray-900 p-4" onClick={(e) => e.stopPropagation()}>
            <button className="text-white text-2xl md:hidden flex absolute top-4 right-4" onClick={closeNavbar}>
              ×
            </button>
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-white">
              <li>
                <Link className="font-medium font-bold block py-2 md:py-0 no-underline" href="/#about" onClick={closeNavbar}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link className="font-medium font-bold block py-2 md:py-0 no-underline" href="/#plans" onClick={closeNavbar}>
                  Plans
                </Link>
              </li>
              <li>
                <Link className="font-medium font-bold block py-2 md:py-0 no-underline" href="/#contactus" onClick={closeNavbar}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="font-bold font-medium block py-2 md:py-0 no-underline" href="/faq" onClick={closeNavbar}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className={`hidden w-full md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link className="text-gray-800 hover:text-gray-600 font-bold font-medium block py-2 md:py-0 no-underline" href="/#about">
                How It Works
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 hover:text-gray-600 font-bold font-medium block py-2 md:py-0 no-underline" href="/#plans">
                Plans
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 hover:text-gray-600 font-bold font-medium block py-2 md:py-0 no-underline" href="/#contactus">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 hover:text-gray-600 font-bold font-medium block py-2 md:py-0 no-underline" href="/faq">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
