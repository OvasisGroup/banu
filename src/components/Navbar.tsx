'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { AlignJustify, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Change background when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          <Image src='/assets/images/SVG/banu.svg' alt='logo' width={150} height={100} className='width={100}' />
        </Link>
        <div className="hidden md:flex space-x-6 justify-between items-center">
          <Link href="/" className="text-gray-900 hover:text-amber-400 font-bold">
            Home
          </Link>
          <Link href="/services" className="text-gray-900 hover:text-amber-400 font-bold">
            Services
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-amber-400 font-bold">
            About Us
          </Link>
          <Link href="/" className="text-gray-900 hover:text-amber-400 font-bold">
            Pricing
          </Link>
          <Link href="/" className="text-gray-900 hover:text-amber-400 font-bold">
            Contacts
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">
          <Button className='border-2 border-amber-400 bg-amber-400 hover:bg-white text-black cursor-pointer p-6 font-bold'>Get Started <ArrowUpRight className='bg-white rounded'/></Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify/>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
