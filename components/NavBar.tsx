"use client";

import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full
        flex items-center justify-between
        px-6 
        py-2
        "
    >
      {/* Logo */}
      <a
        title="logo-gym"
        href="/"
        className="bg-transparent flex items-center gap-3 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300 animate-pulse" />
          <div className="relative bg-transparent rounded-lg sm:p-1 border-yellow-400/70">
            {/* <span className="text-yellow-400 font-black text-xl">⚡</span> */}
            <Image
              src="/logo/rockgym24-logo.png"
              alt="RockGym Logo"
              className="logo"
              width={50}
              height={30}
              priority
            />
          </div>
        </div>
        <div
          className="hidden sm:flex sm:flex-col 
            "
        >
          <span
            className="
      font-bold text-2xl
      dm-serif-display-regular
      bg-linear-to-r
      from-zinc-400
      to-yellow-400
      bg-clip-text
      text-transparent
      [-webkit-text-stroke:0.6px_#facc15]
    "
          >
            TheRockGym24
          </span>

          <span
            className="
      text-xs
      font-normal md:font-semibold
      tracking-widest uppercase
      dm-serif-display-regular-italic
      bg-linear-to-r
      from-zinc-500
      to-yellow-400/80
      bg-clip-text
      text-transparent
    "
          >
            Power. Strength. Elevation
          </span>
        </div>
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 bg-black/40 backdrop-blur-lg px-6 py-2 rounded-2xl">
        <a
          href="/"
          className="text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="/#amenities"
          className="text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider relative group"
        >
          Amenities
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="/#membership"
          className="text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider relative group"
        >
          Membership
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="/services"
          className="text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider relative group"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="/#about"
          className="text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="/#footer"
          className="text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
        </a>
      </div>

      {/* Call Now Button */}
      <div className="hidden sm:flex items-center gap-4">
        <a
          href="tel:9730542555"
          className="group cursor-pointer px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black rounded-lg transition-all duration-300 uppercase text-sm tracking-wider shadow-lg shadow-yellow-400/40 hover:shadow-xl hover:shadow-yellow-400/60 relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>📞</span>
            <span>Call Now</span>
          </span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden relative w-8 h-8 flex items-center justify-center"
      >
        <div className="relative w-6 h-5">
          <span
            className={`absolute h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : "translate-y-0"
            }`}
          />
          <span
            className={`absolute top-2 h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 h-0.5 w-full bg-yellow-400 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : "translate-y-0"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } absolute top-20 left-0 w-full bg-black/40 border-b border-yellow-400/20 backdrop-blur-md transition-all duration-300 md:hidden shadow-lg shadow-yellow-400/5`}
      >
        <div className="flex flex-col gap-4 p-6">
          <a
            onClick={() => setOpen(!open)}
            href="/"
            className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider"
          >
            Home
          </a>
          <a
            onClick={() => setOpen(!open)}
            href="/#amenities"
            className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider"
          >
            Amenities
          </a>
          <a
            onClick={() => setOpen(!open)}
            href="/#membership"
            className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider"
          >
            Membership
          </a>
          <a
            onClick={() => setOpen(!open)}
            href="/services"
            className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider"
          >
            Services
          </a>
          <a
            onClick={() => setOpen(!open)}
            href="/#about"
            className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider"
          >
            About
          </a>
          <a
            onClick={() => setOpen(!open)}
            href="/#footer"
            className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-semibold uppercase text-sm tracking-wider"
          >
            Contact
          </a>
          <a
            onClick={() => setOpen(!open)}
            href="tel:9730542555"
            className="w-full inline-block text-center cursor-pointer px-6 py-3 mt-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black rounded-lg transition-all duration-300 uppercase text-sm tracking-wider shadow-lg shadow-yellow-400/40"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
