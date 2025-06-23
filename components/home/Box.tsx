"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Box = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 2,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // box enters 80% of screen height
          toggleActions: "play none none none",
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Spacer content to allow scrolling first */}
      <div className="h-[150vh] bg-gray-100 flex items-center justify-center">
        <p className="text-xl">Scroll down to see the animation 👇</p>
      </div>

      {/* Animated Box */}
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="h-64 w-64 border border-gray-500" ref={boxRef}></div>
      </div>
    </div>
  );
};

export default Box;
