import React from "react";

const WhatIsNew = () => {
  return (
    <div>
      <div className="gradient-bg py-10 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400 mb-2 sm:mb-3 [font-family:MuseoModerno,sans-serif]">
            What’s New In Lootbax
          </h2>
          <p className="text-neutral-400 max-w-xs sm:max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
            Bagsakan brings the excitement of the casino straight to your
            screen. Safe, secure, and always ready when you are.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <div className="relative">
                <img
                  src="/home/whats-new-01.png"
                  alt="Night has come"
                  className="w-full h-65 object-cover"
                />
                <div className="absolute bottom-5 right-5">
                  <button className="bg-mustard text-[#232323] font-semibold px-3 py-2 rounded-full w-fit self-end">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">LOREM IPSUM</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry text of the printing and typesetting industry
            </p>
            <div className="text-end">
              <p className="text-xs text-gray-500">June 3, 2025</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <div className="relative">
                <img
                  src="/home/whats-new-02.png"
                  alt="Night has come"
                  className="w-full h-65 object-cover"
                />
                <div className="absolute bottom-5 right-5">
                  <button className="bg-mustard text-[#232323] font-semibold px-3 py-2 rounded-full w-fit self-end">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">LOREM IPSUM</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry text of the printing and typesetting industry
            </p>
            <div className="text-end">
              <p className="text-xs text-gray-500">June 3, 2025</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <div className="relative">
                <img
                  src="/home/whats-new-03.png"
                  alt="Welcome"
                  className="w-full h-65 object-cover"
                />
                <div className="absolute bottom-5 right-5">
                  <button className="bg-mustard text-[#232323] font-semibold px-3 py-2 rounded-full w-fit self-end">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">LOREM IPSUM</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry text of the printing and typesetting industry
            </p>
            <div className="text-end">
              <p className="text-xs text-gray-500">June 3, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsNew;
