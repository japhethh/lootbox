import React from "react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <div className="flex justify-center height lg:min-h-[500px] items-center  max-w-7xl mx-auto px-4">
      <div className="flex flex-col">
        <div className="text-center mb-8 flex flex-col gap-4 max-w-4xl mx-auto">
          <h1 className="text-4xl text-center font-semibold text-white leading-12">
            LootBox is more than a streaming
            <br /> platform. It’s a living, breathing
            arena where watching means winning.
          </h1>
          <p className="text-md font-normal text-white">
            Every view, every cheer, every minute spent immersed in your
            favorite creator’s world unlocks the chance to earn exclusive items,
            digital collectibles, in-game skins, merch, and surprises you didn’t
            see coming.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Button className="bg-mustard text-[#232323] text-md font-bold px-13 py-6 rounded-full w-fit self-end">
            Play Now
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Cta;
