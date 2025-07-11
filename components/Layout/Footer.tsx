import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white pb-30 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row border-t border-[#262626] pt-20 md:items-start md:gap-0 justify-between">
        {/* Logo */}
        <div className="flex items-start justify-center md:justify-start mb-6 mr-0 md:mr-20 md:mb-0">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFBA08] tracking-tight select-none">
            LTBX.
          </span>
        </div>
        
        {/* Links - Mobile: 2 columns, Desktop: 3 columns */}
        <div className="w-full md:flex-[2] grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-5 text-xs md:text-sm text-gray-200">
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
            <h4 className="font-semibold mb-3 text-sm md:text-base">Helpful Links</h4>
            <ul className="space-y-5 text-xs md:text-sm text-gray-200">
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
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 text-sm md:text-base">Other links</h4>
            <ul className="space-y-5 text-xs md:text-sm text-gray-200">
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
        <div className="w-full md:w-auto flex flex-col items-center md:items-end mt-6 md:mt-0">
          <form className="w-full max-w-xs flex flex-col gap-3">
            <label
              htmlFor="footer-email"
              className="text-xs mb-1 text-gray-300 text-center md:text-left"
            >
              Contact Us
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Send us email"
              className="rounded-md px-4 py-2 bg-[#232323] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBA08] text-sm"
            />
            <Button
              type="submit"
              className="w-full bg-[#FFBA08] text-black font-semibold hover:bg-[#e6a807] transition rounded-full py-2 text-sm md:text-base"
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
