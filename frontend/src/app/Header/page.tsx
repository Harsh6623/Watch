import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src="/image/logo.png"
              alt="Logo"
            />
            <span className="ml-3 text-xl">WATCHMART</span>
          </span>
        </Link>
        <nav className="md:flex md:ml-auto flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto">
          <Link href="/" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/Men" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">Men</span>
          </Link>
          <Link href="/Women" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">
              Women
            </span>
          </Link>
          <Link href="/Couple" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">
              Couple
            </span>
          </Link>
          <Link href="/Smart" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">
              Smart
            </span>
          </Link>
          <Link href="/AboutUs" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/Contact" passHref>
            <span className="mr-5 hover:text-gray-900 cursor-pointer">
              Contact Us
            </span>
          </Link>
        </nav>
        <div className="flex items-center">
          <Link href="/Login" passHref>
            <button className="text-white bg-indigo-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
