"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen); 

  return (
    <nav className="flex flex-col sm:flex-row justify-center items-center w-full p-4 bg-black text-white">
      {/* Logo and Hamburger Icon  */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="text-2xl font-bold pl-8 mb-4 sm:mb-0">
          <span className="text-red-600">Fest</span>
          <span className="text-white">ico</span>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="sm:hidden flex items-center pr-8">
          <FiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Navigation Links, Search Icon, and Login/Signup Buttons */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:flex sm:space-x-8 sm:mx-auto items-center mb-4 sm:mb-0 w-full justify-center`}
      >
        <ul className="flex flex-col sm:flex-row sm:space-x-8 sm:mx-auto items-center mb-4 sm:mb-0 w-full justify-center">
          <li>
            <Link className="hover:text-red-600 text-sm transition" href="/Concerts">
              All Concerts & Events
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600 text-sm transition" href="/Festivals">
              Festivals
            </Link>
          </li>
          <li>
            <Link className="hover:text-red-600 text-sm transition" href="/LiveShows">
              Live Shows
            </Link>
          </li>
        </ul>

        {/* Search Icon for larger screens */}
        <div className="hidden sm:flex items-center mx-10">
          <FiSearch className="text-lg hover:text-red-600 cursor-pointer transition" />
        </div>

        {/* Login and Signup Buttons in the same row */}
        <div className="flex space-x-4 sm:ml-auto">
          <button className="px-4 py-2 bg-gray-600 rounded hover:bg-red-600 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-red-600 rounded hover:bg-blue-600 transition">
            Signup
          </button>
        </div>
      </div>

      {/* Close Icon for mobile view */}
      {menuOpen && (
        <div className="sm:hidden flex items-center pr-8 mt-4">
          <FiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}
    </nav>
  );
}
