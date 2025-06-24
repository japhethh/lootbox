import Image from "next/image";

const GameMechanics = () => {
  return (
    <div className="gradient-bg text-white">
      {/* Assuming 'gradient-bg' is a custom class defined in your global CSS */}
      <div className="max-w-7xl mx-auto px-4">
    
        <div className="">
          {/* Responsive grid: stack on mobile, grid on md+ */}
          <div className="grid grid-cols-1 grid-rows-none gap-4 h-auto md:grid-cols-12 md:grid-rows-5 md:h-[400px]">
            {/* Cell 1: Image 1 */}
            <div className="relative col-span-1 md:col-span-3 md:row-span-3  rounded-lg overflow-hidden h-48 md:h-auto">
              <Image
                src="/home/game-m-01.png"
                alt="Abstract green pattern"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            {/* Cell 2: "Live. Game. Repeat" */}
            <div className="col-span-1 md:col-span-3 md:row-span-2 md:col-start-1 md:row-start-4 bg-[#CBFC02] text-black rounded-lg p-4 flex flex-col justify-center">
              <div>
                <h1 className="font-semibold text-2xl md:text-3xl">
                  Live. <br /> Game. <br /> Repeat
                </h1>
              </div>
            </div>

            {/* Cell 3: "LOOTBAX" */}
            <div className="col-span-1 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-1 flex justify-center items-center bg-yellow-400 rounded-lg p-2">
              <div className="text-center">
                <h1 className="text-black font-bold text-4xl md:text-5xl [font-family:MuseoModerno,sans-serif] ">
                  LOOTBAX
                </h1>
              </div>
            </div>

            {/* Cell 4: Image 2 */}
            <div className="relative col-span-1 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-3 bg-white rounded-lg overflow-hidden h-48 md:h-auto">
              <Image
                src="/home/game-m-02.png"
                alt="Gaming character illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            {/* Cell 5: "Game Mechanics" Text Container */}
            <div className="col-span-1 md:col-span-6 md:row-span-5 md:col-start-7 md:row-start-1 bg-[#1B1B1B] rounded-lg p-6 md:p-10 flex flex-col gap-5 justify-center">
              <h1 className="text-white font-bold text-3xl md:text-5xl">
                <span>Game</span>
                <br />
                <span> Mechanics</span>
              </h1>
              <p className="text-base md:text-lg font-normal text-gray-300">
                LootBox is more than a streaming platform. It’s a living,
                breathing arena where watching means winning. Every view, every
                cheer, every minute spent immersed in your favorite creator’s
                world unlocks the chance to earn exclusive items, digital
                collectibles, in-game skins, merch, and surprises you didn’t see
                coming.
              </p>
              <div>
                <button
                  className="text-black font-bold bg-white hover:bg-neutral-200 transition-colors py-3 px-6 md:py-4 md:px-8 rounded-full text-sm md:text-md"
                  type="button"
                >
                  Explore Lootbox
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMechanics;
