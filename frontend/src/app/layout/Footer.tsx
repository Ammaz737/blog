import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="h-16 w-16" />
            <span className="ml-3 text-xl">Muhammad Ammaz</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Muhammad Ammaz —
            <a href="#" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Ammaz</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Social Icons */}
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
