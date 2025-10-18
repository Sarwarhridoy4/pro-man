import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='bg-white border-t mt-12'>
      <div className='max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} ProductApp. All rights reserved.
        </p>
        <div className='flex space-x-4 mt-2 md:mt-0'>
          <Link href='#' className='hover:text-indigo-500 text-sm'>
            Privacy Policy
          </Link>
          <Link href='#' className='hover:text-indigo-500 text-sm'>
            Terms of Service
          </Link>
          <Link href='#' className='hover:text-indigo-500 text-sm'>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
