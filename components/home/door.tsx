"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "../ui/button";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DoorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const upMore = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stickyContent = stickyContainerRef.current;
    const leftDoor = leftDoorRef.current;
    const rightDoor = rightDoorRef.current;
    const box = boxRef.current;

    if (!section || !stickyContent || !leftDoor || !rightDoor || !box) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: stickyContent,
        start: "top top",
        end: () => `+=${section.offsetHeight - window.innerHeight}`,
        scrub: 1,

        // markers: true,
        anticipatePin: 1,
      },
    });
    const boxAnimation = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    boxAnimation
      .to(box, {
        rotation: 0,
        duration: 1.5,
        ease: "power1.inOut",
      })
      .to(box, {
        rotation: -30,
        duration: 1.5,
        ease: "power1.inOut",
      });

    tl.to(leftDoor, { xPercent: -100, ease: "power1.inOut" }, "open")
      .to(rightDoor, { xPercent: 100, ease: "power1.inOut" }, "open")
      .addLabel("doorsOpened") // label after doors open
      .fromTo(
        box,
        { y: -500, opacity: 0 },
        { y: 0, opacity: 1, ease: "power.inOut", duration: 3 },
        "doorsOpened"
      );

    tl.to({}, { duration: 1 });

    if (upMore.current) {
      // Check if element is already in view on page load
      const rect = upMore.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight * 0.9;

      if (isInView) {
        // Element is already visible, set it to final state
        gsap.set(upMore.current, { opacity: 1, y: 0 });
      } else {
        // Element not visible, create animation
        gsap.fromTo(
          upMore.current,
          {
            opacity: 0,
            y: 300,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power.in",
            duration: 1,
            scrollTrigger: {
              trigger: upMore.current,
              start: "top 90%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <ParallaxProvider>
      <div
        ref={sectionRef}
        className="relative bg-[#1B1B1B]"
        style={{ height: "250vh" }}
      >
        <div
          ref={stickyContainerRef}
          className="w-full h-screen top-0 flex flex-col   overflow-hidden text-center"
        >
          {/* Content that gets revealed (z-index 0) */}
          <div className="z-0 flex flex-col justify-between mt-15 items-center h-screen">
            <div className="max-w-7xl flex-1 flex flex-col justify-center mx-auto">
              <div className="max-w-2xl mx-auto">
                <div className="flex relative justify-center items-center">
                  <div className="relative w-full md:max-w-[300px] aspect-[5/2]">
                    <Image
                      src="/home/hero/lootbox-logo.png"
                      alt="Lootbox Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="max-w-md mx-auto">
                  <p className="text-md font-sans text-white mt-1">
                    Bagsakan brings the excitement of the casino straight to
                    your screen. Safe, secure, and always ready when you are.
                  </p>
                </div>
                <div className="flex flex-row gap-3 justify-center items-center mt-6">
                  <Button className="bg-mustard text-black cursor-pointer font-semibold rounded-full px-5 py-5 text-lg bg-white transition">
                    Watch Streams
                  </Button>
                  <Button className="bg-mustard text-white cursor-pointer font-semibold rounded-full px-5 py-5 text-lg bg-mustard transition">
                    Explore Games
                  </Button>
                </div>

                <div className="flex justify-center items-center h-[40vh] w-full">
                  {/* Box with GSAP animation */}
                  <div className="flex justify-center items-center my-2">
                    <div
                      ref={boxRef}
                      className="transform-gpu relative will-change-transform"
                    >
                      <div className="relative">
                        {/* Laptops (1536px) */}
                        {/* Desktops (1920px) */}
                        <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] 2xl:w-[260px] 2xl:h-[260px]  3xl:w-[280px] 3xl:h-[280px]">
                          <Image
                            src="/home/hero/box-rotate.png"
                            alt="3D Lootbox"
                            fill
                            className="filter drop-shadow-lg object-contain"
                            priority
                          />
                          {/* Glow effect */}
                          <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl -z-10 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={upMore}
              className="w-full container h-[22vh] flex justify-center items-center rounded-t-2xl bg-[#1E1E1E]"
            >
              <div className="py-8 md:py-10 max-w-xl w-full mx-auto px-4">
                <div className="flex flex-row justify-around items-center gap-4 sm:gap-6 md:gap-8 text-center w-full">
                  <div className="flex-1 flex flex-col gap-1 sm:gap-2 min-w-[80px] max-w-[120px] sm:max-w-none">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-300 leading-tight">
                      Up To More Than
                    </p>
                    <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400">
                      1M+
                    </h1>
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-300 leading-tight">
                      Active Users
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-1 sm:gap-2 min-w-[80px] max-w-[120px] sm:max-w-none">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-300 leading-tight">
                      More Future
                    </p>
                    <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-400">
                      100+
                    </h1>
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-300 leading-tight">
                      Streamers
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-1 sm:gap-2 min-w-[80px] max-w-[120px] sm:max-w-none">
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-300 leading-tight">
                      Dropping Weekly
                    </p>
                    <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400">
                      1M+
                    </h1>
                    <p className="text-[10px] sm:text-xs font-medium text-neutral-300 leading-tight">
                      New Games
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Door (z-index 10) */}
          <div
            ref={leftDoorRef}
            className="absolute top-0 left-0 w-3/3 h-full z-10 overflow-hidden"
          >
            <Image
              src="/home/left-door.png"
              alt="Left Door"
              fill
              style={{ objectFit: "cover" }}
              className="shadow-2xl"
            />
          </div>

          {/* Right Door (z-index 10) */}
          <div
            ref={rightDoorRef}
            className="absolute top-0 right-0 w-3/3 h-full z-10 overflow-hidden"
          >
            <Image
              src="/home/right-door.png"
              alt="Right Door"
              fill
              style={{ objectFit: "cover" }}
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
