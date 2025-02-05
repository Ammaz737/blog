import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo.png" alt="Logo" width={64} height={56} className="w-16 h-14" />
            <span className="ml-3 text-xl">Muhammad Ammaz</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
            <Link className="mr-5 hover:text-gray-900" href="/tutorials">Tutorials</Link>
            <Link className="mr-5 hover:text-gray-900" href="/blog">Blogs</Link>
            <Link className="mr-5 hover:text-gray-900" href="/contact">Contacts</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
