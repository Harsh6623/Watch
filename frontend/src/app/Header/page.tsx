"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              href={""}
            >
              <img className="w-[45px] h-[45px]" src="/image/logo.png" />
              <span className="ml-3 text-xl">WATCHMART</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" href={""}>
                Home
              </Link>
              <Link
                onClick={toggleDropdown}
                className="mr-5 hover:text-gray-900 cursor-pointer relative"
                href={""}
              >
                Product
                {isDropdownOpen && (
                  <div className="absolute bg-white border border-gray-200 py-2 mt-2 w-32 rounded-lg shadow-lg z-10">
                    <Link
                      href="#"
                      className="block px-4 py-2  text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >
                      MEN
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2   text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >
                      WOMEN
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2  text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >
                      KIDE'S
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2  text-gray-800 hover:bg-indigo-500 hover:text-white"
                    >
                      SMART
                    </Link>
                  </div>
                )}
              </Link>
              <Link className="mr-5 hover:text-gray-900" href="/AboutUs">
                About Us
              </Link>
              <Link className="mr-5 hover:text-gray-900" href="/Contact">
                Contact Us
              </Link>
            </nav>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Login
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
