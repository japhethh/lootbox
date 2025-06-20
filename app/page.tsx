import Cta from "@/components/home/Cta";
import ExclusiveReward from "@/components/home/ExclusiveReward";
import FeaturedStreamers from "@/components/home/featured-streamers";
import GameMechanics from "@/components/home/GameMechanics";
import Hero from "@/components/home/Hero";
import LiveNow from "@/components/home/LiveNow";
import StreamersTestimonial from "@/components/home/streamersTestimonial";
import WhatIsNew from "@/components/home/WhatIsNew";
import React from "react";

const page = () => {
  return (
    <div className="gradient-bg">
      <Hero />
      <GameMechanics />
      <FeaturedStreamers />
      <StreamersTestimonial />
      <LiveNow />
      <ExclusiveReward />
      <WhatIsNew />
      <Cta />
    </div>
  );
};

export default page;
