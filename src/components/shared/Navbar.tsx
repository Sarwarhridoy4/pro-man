"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { LucideMenu, LucideX } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <Link href='/' className='text-xl font-bold text-indigo-600'>
            ProductApp
          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-6 items-center'>
            <Link href='/products' className='hover:text-indigo-500'>
              Products
            </Link>
            <Link href='/products/create' className='hover:text-indigo-500'>
              Create
            </Link>
            <Button onClick={() => alert("Logout clicked!")} variant='outline'>
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='p-2 rounded-md hover:bg-gray-100'
            >
              {isOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-md'>
          <Link href='/products' className='block px-4 py-2 hover:bg-gray-50'>
            Products
          </Link>
          <Link
            href='/products/create'
            className='block px-4 py-2 hover:bg-gray-50'
          >
            Create
          </Link>
          <Button
            className='w-full m-4'
            onClick={() => alert("Logout clicked!")}
            variant='outline'
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
