"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const powerbg = useRef<HTMLDivElement>(null);
  const streamers = useRef<HTMLDivElement>(null);
  const watched = useRef<HTMLDivElement>(null);
  const belowAnimation = useRef<HTMLDivElement>(null);
  const newStreaming = useRef<HTMLDivElement>(null);
  const playStream = useRef<HTMLDivElement>(null);
  const getStarted = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (powerbg.current) {
      gsap.fromTo(
        powerbg.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -50,
          opacity: 0, // Hide after animation
          ease: "power1.out",
          scrollTrigger: {
            trigger: powerbg.current,
            start: "top 10%",
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && powerbg.current) {
                powerbg.current.style.display = "none";
              } else if (powerbg.current) {
                powerbg.current.style.display = "";
              }
            },
          },
        }
      );
    }
    if (streamers.current) {
      gsap.fromTo(
        streamers.current,
        {
          x: 0,
          opactiy: 1,
        },
        {
          x: -50,
          opacity: 0,
          ease: "power1.out",
          duration: 1,
          scrollTrigger: {
            trigger: streamers.current,
            start: "top 20%",
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && streamers.current) {
                streamers.current.style.display = "none";
              } else if (streamers.current) {
                streamers.current.style.display = "";
              }
            },
          },
        }
      );
    }

    if (watched.current) {
      gsap.fromTo(
        watched.current,
        {
          x: 0,
          opacity: 1,
        },
        {
          x: 50,
          opacity: 0,
          ease: "power.out",
          scrollTrigger: {
            trigger: watched.current,
            start: "top 20%",
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && watched.current) {
                watched.current.style.display = "none";
              } else if (watched.current) {
                watched.current.style.display = "";
              }
            },
          },
        }
      );
    }

    if (belowAnimation.current) {
      gsap.fromTo(
        belowAnimation.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 50,
          opacity: 0,
          ease: "power.out",
          scrollTrigger: {
            trigger: belowAnimation.current,
            start: "top 20%",
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && belowAnimation.current) {
                belowAnimation.current.style.display = "none";
              } else if (belowAnimation.current) {
                belowAnimation.current.style.display = "";
              }
            },
          },
        }
      );
    }

    if (newStreaming.current) {
      gsap.fromTo(
        newStreaming.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 50,
          opacity: 0,
          ease: "power.out",
          scrollTrigger: {
            trigger: newStreaming.current,
            start: "top 35%",
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && newStreaming.current) {
                newStreaming.current.style.display = "none";
              } else if (newStreaming.current) {
                newStreaming.current.style.display = "";
              }
            },
          },
        }
      );
    }

    if (playStream.current) {
      gsap.fromTo(
        playStream.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 50,
          opacity: 0,
          ease: "power.out",
          scrollTrigger: {
            start: "top 80%",
            trigger: playStream.current,
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && playStream.current) {
                playStream.current.style.display = "none";
              } else if (playStream.current) {
                playStream.current.style.display = "";
              }
            },
          },
        }
      );
    }

    if (getStarted.current) {
      gsap.fromTo(
        getStarted.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: 200,
          ease: "power.out",
          scrollTrigger: {
            start: "top 60%",
            trigger: getStarted.current,
            scrub: 1,
            onUpdate: (self) => {
              // Optionally, you can set display: 'none' when fully out of view
              if (self.progress === 1 && getStarted.current) {
                getStarted.current.style.display = "none";
              } else if (getStarted.current) {
                getStarted.current.style.display = "";
              }
            },
          },
        }
      );
    }
  }, []);

  return (
    <section className="absolute z-10 pt-50 md:px-4 px-2  text-white w-full flex flex-col items-center min-h-[100vh] py-16">
      {/* Decorative sparkles */}
      <span className="absolute left-[20%] top-[20%] text-3xl">✦</span>
      <span className="absolute right-[20%] top-[18%] text-3xl">✦</span>
      <span className="absolute left-[30%] bottom-[18%] text-3xl">✦</span>
      <span className="absolute right-[30%] bottom-[20%] text-3xl">✦</span>

      {/* Powered by pill */}
      <div ref={powerbg} className="mb-6">
        <div>
          <span className="inline-block bg-[#181818] text-white text-sm font-semibold rounded-full px-6 py-2 shadow">
            Powered by.
          </span>
        </div>
      </div>

      {/* Pixel logo text */}
      <div ref={powerbg}>
        <Image
          src="/home/hero/lootbox-logo.png"
          alt="Lootbox Logo"
          width={300}
          height={0}
        />
      </div>

      {/* Main headline */}
      <div className="flex flex-col mt-3 gap-3 items-center text-center mb-2">
        <div className="text-[2rem] sm:text-sm md:text-[5rem] flex flex-row gap-2 font-bold leading-none">
          <div ref={streamers} className="text-[#9360E3]">
            <span>Streamers</span>
          </div>
          <div ref={watched} className="text-white">
            <span>, Watched</span>
          </div>
        </div>
        <div
          ref={belowAnimation}
          className="text-[2.5rem] sm:text-sm md:text-[5rem] font-bold leading-none"
        >
          <span className="text-white">by </span>
          <span
            className="text-transparent font-bold"
            style={{ WebkitTextStroke: "1px #FFBA08", color: "transparent" }}
          >
            Billions
          </span>
        </div>
      </div>

      <div ref={newStreaming} className="mt-2 mb-6">
        <span className="text-base md:text-lg text-white/80">
          New Streaming For Everyone.{" "}
          <a href="#" className="text-mustard font-semibold hover:underline">
            Learn More
          </a>
        </span>
      </div>

      <div ref={getStarted}>
        <Button   onClick={() => window.open("https://lootbax.socia-dev.com/register", "_blank")} className="bg-mustard text-black cursor-pointer font-semibold rounded-full px-5 py-6 text-lg hover:bg-[#e6a807] transition">
          Get Started →
        </Button>
      </div>

      <div ref={playStream} className="md:mt-55 mt-35">
        <div className="flex uppercase flex-row gap-5 text-gray-700 md:text-2xl lg:text-3xl">
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
