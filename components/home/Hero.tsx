import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="gradient-bg-secondary">
      <div className="text-center">
        <div>
          <Button className="rounded-full bg-secondary-primary text-white py-5 px-4 font-bold">
            Powered by.
          </Button>
        </div>
        <h1>LootBX</h1>
      </div>
      <div>
        <div>
          <h1>Steamers,</h1>
        </div>
        <div>
          <h1>Watched</h1>
        </div>
        <div>
          <h1>by Billions</h1>
          <div>
            <p>New Streaming For Everyone. Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
