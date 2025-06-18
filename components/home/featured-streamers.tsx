"use client";

import * as React from "react";
import Image from "next/image";
// Removed Card and CardContent imports as they are not used in your provided structure
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Streamer {
  id: number;
  name: string;
  position: string;
  imageSrc: string;
}

const streamers: Streamer[] = [
  {
    id: 1,
    name: "Lorem Ipsum",
    position: "Position",
    imageSrc: "/home/feature-image-01.png", // Using your provided image paths
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    position: "Position",
    imageSrc: "/home/feature-image-02.png",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    position: "Position",
    imageSrc: "/home/feature-image-03.png",
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    position: "Position",
    imageSrc: "/home/feature-image-04.png",
  },
  {
    id: 5,
    name: "Lorem Ipsum",
    position: "Position",
    imageSrc: "/home/feature-image-01.png", // Repeated image, as in your example
  },
  {
    id: 6,
    name: "Lorem Ipsum",
    position: "Position",
    imageSrc: "/home/feature-image-02.png", // Repeated image, as in your example
  },
];

const FeaturedStreamers = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Set the total number of slides for the dots
    setCount(api.scrollSnapList().length);
    // Set the initial current slide index
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    // Re-run effect if api changes to update button states
    // This will trigger a re-render, allowing canScrollPrev/Next to be re-evaluated
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 gradient-bg">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3  [font-family:MuseoModerno,sans-serif]">
          Featured Streamers
        </h2>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Bagsakan brings the excitement of the casino straight to your screen.
          Safe, secure, and always ready when you are.
        </p>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: 1, // Key change: scroll one slide at a time
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {streamers.map((streamer) => (
              <CarouselItem
                key={streamer.id}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  {/* Using your provided structure without Card/CardContent */}
                  <div className="p-0">
                    <div className=" rounded-lg flex p-0 flex-col items-center justify-center ">
                      <div className="w-full overflow-hidden rounded-lg aspect-[4/4] relative">
                        {" "}
                        {/* aspect-square as per your code */}
                        <Image
                          src={
                            streamer.imageSrc ||
                            "/placeholder.svg?width=300&height=300"
                          } // Added placeholder fallback
                          alt={streamer.name}
                          fill
                          className="object-cover" // Removed rounded-t-lg as image fills the square
                        />
                      </div>
                    </div>
                    <div className="p-4 text-start w-full">
                      <h3 className="text-lg font-semibold text-white">
                        {streamer.name}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {streamer.position}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <button
            onClick={scrollPrev}
            className="absolute left-[10px]  md:left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-neutral-700/70 hover:bg-neutral-600 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            disabled={!api?.canScrollPrev()} // Updated disabled logic
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[10px]  md:right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-neutral-700/70 hover:bg-neutral-600 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            disabled={!api?.canScrollNext()} // Updated disabled logic
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </Carousel>
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        {/* Ensure `count` reflects the number of individual slides if slidesToScroll is 1 */}
        {/* If slidesToScroll:1, api.scrollSnapList().length should be streamers.length */}
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index
                ? "bg-purple-600"
                : "bg-neutral-600 hover:bg-neutral-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStreamers;
