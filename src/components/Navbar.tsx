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
          <Link href="/" className="text-gray-900 hover:text-blue-600 font-bold">
            Home
          </Link>
          <Link href="/services" className="text-gray-900 hover:text-blue-600 font-bold">
            Services
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-blue-600 font-bold">
            About Us
          </Link>
          <Link href="/" className="text-gray-900 hover:text-blue-600 font-bold">
            Pricing
          </Link>
          <Link href="/contacts" className="text-gray-900 hover:text-blue-600 font-bold">
            Contacts
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-bg-blue-600">
          <Button className=' bg-blue-900 hover:bg-blue-600 text-white cursor-pointer p-6 font-bold'>Get Started <ArrowUpRight/></Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify/>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link href="/" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Home <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/services" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Services <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/about" className=" block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            About Us <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Pricing <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/contacts" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Contacts <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/dashboard" className="block flex flex-row justify-between text-gray-700 hover:text-blue-500">
          <Button className='w-full border-2 border-amber-400 bg-teal-800 hover:bg-white text-black cursor-pointer p-6 font-bold'>Get Started <ArrowUpRight/></Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
