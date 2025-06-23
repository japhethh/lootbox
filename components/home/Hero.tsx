import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="absolute z-10 text-white w-full flex flex-col items-center justify-center height md:min-h-[85vh] py-16">
      {/* Decorative sparkles */}
      <span className="absolute left-[20%] top-[20%] text-3xl">✦</span>
      <span className="absolute right-[20%] top-[18%] text-3xl">✦</span>
      <span className="absolute left-[30%] bottom-[18%] text-3xl">✦</span>
      <span className="absolute right-[30%] bottom-[20%] text-3xl">✦</span>

      {/* Powered by pill */}
      <div className="mb-6">
        <span className="inline-block bg-[#181818] text-white text-sm font-semibold rounded-full px-6 py-2 shadow">
          Powered by.
        </span>
      </div>

      {/* Pixel logo text */}
      <Image
        src="/home/hero/lootbox-logo.png"
        alt="image"
        width={300}
        height={0}
      />

      {/* Main headline */}
      <div className="flex flex-col mt-3 gap-3 items-center text-center mb-2">
        <span className="text-[2.5rem] md:text-[5rem] font-bold leading-none">
          <span className="text-[#9360E3]">Streamers</span>
          <span className="text-white">, Watched</span>
        </span>
        <span className="text-[2.5rem] md:text-[5rem] font-bold leading-none">
          <span className="text-white">by </span>
          <span
            className="text-transparent font-bold"
            style={{ WebkitTextStroke: "1px #FFBA08", color: "transparent" }}
          >
            Billions
          </span>
        </span>
      </div>

      <div className="mt-2 mb-6">
        <span className="text-base md:text-lg text-white/80">
          New Streaming For Everyone.
          <a href="#" className="text-mustard font-semibold hover:underline">
            Learn More
          </a>
        </span>
      </div>

      <Button className="bg-mustard text-black cursor-pointer font-semibold rounded-full px-5 py-6 text-lg hover:bg-[#e6a807] transition">
        Get Started →
      </Button>

      <div className="mt-25 sm:mt-20 md:mt-20 lg:mt-25">
        <div className="flex uppercase flex-row gap-5 text-gray-700  md:text-2xl lg:text-3xl">
          <h1>Play</h1>
          <h1>stream</h1>
          <h1>win</h1>
          <h1>loot</h1>
          <h1>repeat</h1>
          <h1>flex</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
