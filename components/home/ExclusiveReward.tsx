import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const partners = [
  { img: "/home/exclusive-01.png" },
  { img: "/home/exclusive-02.png" },
  { img: "/home/exclusive-03.png" },
  { img: "/home/exclusive-04.png" },
  { img: "/home/exclusive-05.png" },
  { img: "/home/exclusive-06.png" },
];

const firstRow = partners.slice(0, partners.length / 2);
const secondRow = partners.slice(partners.length / 2);

const PartnerCard = ({ img }: { img: string }) => (
  <figure
    className={cn(
      // Smaller on mobile, larger on md+
      "relative w-32 h-20 sm:w-40 sm:h-28 md:w-64 md:h-[200px] cursor-pointer overflow-hidden rounded-xl border",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <img
      className="w-full h-full object-cover"
      alt="Partner logo"
      src={img || "/placeholder.svg"}
    />
  </figure>
);

const ExclusiveReward = () => (
  <div className="flex flex-col gap-2 sm:gap-3 py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-0 md:min-h-[600px]">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400 mb-2 sm:mb-3 [font-family:MuseoModerno,sans-serif]">
        Exclusive Rewards
      </h2>
      <p className="text-neutral-400 max-w-xs sm:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
        LootBox is where the next generation don’t just watch—they participate.
        It’s where your loyalty is recognized, your fandom rewarded, and your
        time respected. We blend high-energy streaming, interactive events, and
        a reward economy that turns viewers into active players in the
        entertainment experience.
      </p>
    </div>

    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1 sm:gap-2 md:gap-4">
      <Marquee className="[--duration:20s]">
        {firstRow.map((partner, index) => (
          <PartnerCard key={`first-${index}`} {...partner} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((partner, index) => (
          <PartnerCard key={`second-${index}`} {...partner} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/4 bg-gradient-to-r from-[#060F1C]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/4 bg-gradient-to-l from-[#060F1C]"></div>
    </div>
  </div>
);

export default ExclusiveReward;
