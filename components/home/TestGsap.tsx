"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TestGsap = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    
    // Simple timeline with ScrollTrigger
    gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom", 
        scrub: true,
        pin: box.parentElement,
      }
    })
    // Top to center
    .to(box, {
      y: "calc(50vh - 50%)", 
      duration: 1
    })
    // Stay in center
    .to({}, { duration: 1 })
    // Center to bottom
    .to(box, {
      y: "calc(100vh - 100%)",
      duration: 1
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <div className="h-[300vh] bg-gradient-to-b from-[#1E1E1E] to-[#151515]">
      {/* Pinned container */}
      <div className="h-screen w-full overflow-hidden">
        {/* Moving box */}
        <div 
          ref={boxRef} 
          className="absolute left-1/2 transform -translate-x-1/2 top-0"
        >
          <div className="bg-purple-600 h-40 w-40 rounded-lg flex items-center justify-center text-white font-bold">
            Scroll to move me
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-8 w-full text-center text-white">
        <p className="font-bold">↓ Scroll to see the animation ↓</p>
      </div>
    </div>  );
}

export default TestGsap;