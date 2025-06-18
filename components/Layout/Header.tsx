"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1E1E1E] py-4 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-20">
          <span className="text-3xl md:text-5xl font-bold text-[#FFBA08] tracking-tight select-none">
            LTBX.
          </span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center z-20 ml-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* Center Nav */}
        <nav
          className={`
            flex-1 md:flex md:justify-center
            ${
              menuOpen
                ? "fixed inset-0 bg-[#1E1E1E] flex flex-col items-center justify-center z-10"
                : "hidden"
            }
            md:static md:bg-transparent md:flex md:flex-row md:items-center md:gap-0
          `}
        >
          <ul className="flex flex-col md:flex-row bg-[#232323] md:rounded-full px-6 py-6 md:py-3 gap-6 md:gap-6 md:px-6">
            <li>
              <a
                href="#"
                className="text-white font-medium px-3 py-2 md:py-1 rounded-full bg-[#353535] shadow transition block text-center"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-medium px-3 py-2 md:py-1 rounded-full hover:bg-[#353535] transition block text-center"
              >
                Streamers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-medium px-3 py-2 md:py-1 rounded-full hover:bg-[#353535] transition block text-center"
              >
                Community
              </a>
            </li>
            {/* Play Now Button for mobile */}
            <li className="block md:hidden mt-4">
              <Button
                className="bg-[#FFBA08] text-black font-bold rounded-none px-8 py-3 border-2 border-[#FFBA08] relative group text-base w-full"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, 100% 70%, calc(100% - 10px) 100%, 0 100%, 0 10px)",
                }}
              >
                PLAY NOW
              </Button>
            </li>
          </ul>
        </nav>
        {/* Play Now Button for desktop */}
        <div className="hidden md:flex items-center">
          <Button
            className="bg-[#FFBA08] text-black font-bold rounded-none px-8 py-3 border-2 border-[#FFBA08] relative group text-base"
            style={{
              clipPath:
                "polygon(10px 0, 100% 0, 100% 70%, calc(100% - 10px) 100%, 0 100%, 0 10px)",
            }}
          >
            PLAY NOW
          </Button>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-0 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Headers;
