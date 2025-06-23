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
    }); // Create a separate floating animation for the box
    const boxAnimation = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    // gsap.fromTo(
    //   box,
    //   {
    //     y: -500,
    //   },
    //   {
    //     y: 0,
    //     ease: "power.inOut",
    //   }
    // );
    // Continuous floating animation
    boxAnimation
      .to(box, {
        y: 0,
        rotation: 0,
        duration: 1.5,
        ease: "power1.inOut",
      })
      .to(box, {
        y: -32,
        rotation: -30,
        duration: 1.5,
        ease: "power1.inOut",
      });

    // tl.fromTo(
    //   box,
    //   {
    //     opacity: 0,
    //     scale: 0.5,
    //   },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     ease: "power2.out",
    //     duration: 2,
    //   },
    //   "open+=0.1"
    // );

    tl.to(leftDoor, { xPercent: -100, ease: "power1.inOut" }, "open")
      .to(rightDoor, { xPercent: 100, ease: "power1.inOut" }, "open")
      .addLabel("doorsOpened") // label after doors open
      .fromTo(
        box,
        { y: -500, opacity: 0 },
        { y: 0, opacity: 1, ease: "power.inOut", duration: 2 },
        "doorsOpened"
      );

    tl.to({}, { duration: 1 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <ParallaxProvider>
      <div
        ref={sectionRef}
        className="relative gradient-bg"
        style={{ height: "210vh" }}
      >
        <div
          ref={stickyContainerRef}
          className="height w-full top-0 flex flex-col pt-30 pb-45 lg:min-h-[85vh] overflow-hidden text-center"
        >
          {/* Content that gets revealed (z-index 0) */}
          <div className="z-0">
            <div className="max-w-xl mx-auto">
              <div className="flex justify-center items-center">
                <div>
                  <Image
                    src="/home/hero/lootbox-logo.png"
                    alt="image"
                    width={300}
                    height={0}
                  />
                </div>
              </div>
              <p className="text-lg text-white mt-4">
                Bagsakan brings the excitement of the casino straight to your
                screen. Safe, secure, and always ready when you are.
              </p>
              <div className="flex flex-row gap-3 justify-center items-center mt-6">
                <Button className="bg-mustard text-black cursor-pointer font-semibold rounded-full px-5 py-5 text-lg bg-white transition">
                  Watch Streams
                </Button>
                <Button className="bg-mustard text-white cursor-pointer font-semibold rounded-full px-5 py-5 text-lg bg-mustard transition">
                  Explore Games
                </Button>
              </div>
              {/* Box with GSAP animation */}
              <div className="flex justify-center items-center mt-10">
                <div
                  ref={boxRef}
                  className="transform-gpu relative will-change-transform  "
                >
                  <div className="relative">
                    <Image
                      src="/home/hero/box-rotate.png"
                      alt="3D Lootbox"
                      width={250}
                      height={250}
                      className="filter drop-shadow-lg"
                      priority
                    />
                    {/* Add optional glow effect */}
                    <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl -z-10 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-10 max-w-2xl mx-auto px-4">
                  <div className="flex flex-row sm:flex-row justify-around items-center gap-4 sm:gap-8 text-center w-full overflow-x-auto">
                    <div className="flex-1 flex flex-col gap-2 min-w-[100px]">
                      <p className="text-xs font-medium text-neutral-300">
                        Up To More Than
                      </p>
                      <h1 className="font-bold text-2xl sm:text-3xl text-yellow-400">
                        1M+
                      </h1>
                      <p className="text-xs font-medium text-neutral-300">
                        Active Users
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 min-w-[100px]">
                      <p className="text-xs font-medium text-neutral-300">
                        More Future
                      </p>
                      <h1 className="font-bold text-2xl sm:text-3xl text-purple-400">
                        100+
                      </h1>
                      <p className="text-xs font-medium text-neutral-300">
                        Streamers
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 min-w-[100px]">
                      <p className="text-xs font-medium text-neutral-300">
                        Dropping Weekly
                      </p>
                      <h1 className="font-bold text-2xl sm:text-3xl text-yellow-400">
                        1M+
                      </h1>
                      <p className="text-xs font-medium text-neutral-300">
                        New Games
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div>

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
