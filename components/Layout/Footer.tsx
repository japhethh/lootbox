import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:items-start md:gap-0 justify-between">
        {/* Logo */}
        <div className="flex items-start justify-start mb-6 md:mb-0">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFBA08] tracking-tight select-none">
            LTBX.
          </span>
        </div>
        {/* Links */}
        <div className="w-full md:flex-[2] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Streamers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Helpful Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  How To Play
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Weekly Winners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Loot Pool
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Other links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Terms &amp; Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFBA08] transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Contact Us */}
        <div className="w-full md:w-auto flex flex-col items-end md:items-end mt-6 md:mt-0">
          <form className="w-full max-w-xs flex flex-col gap-3">
            <label
              htmlFor="footer-email"
              className="text-xs mb-1 text-gray-300"
            >
              Contact Us
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Send us email"
              className="rounded-md px-4 py-2 bg-[#232323] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBA08]"
            />
            <Button
              type="submit"
              className="w-full bg-[#FFBA08] text-black font-semibold hover:bg-[#e6a807] transition rounded-full py-2 text-base"
            >
              Inquire
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
