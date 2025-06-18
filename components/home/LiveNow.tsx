import React from "react";

const LiveNow = () => {
  return (
    <div>
      <div className="gradient-bg py-10 px-8 max-w-7xl mx-auto" >
        <h2 className="text-white text-xl font-semibold mb-8">
          LIVE NOW <span className="ml-2">&rarr;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src="/home/live-image-01.png"
                alt="Night Market"
                className="w-full h-65 object-cover"
              />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">LOREM IPSUM</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry text of the printing and typesetting industry
            </p>
            <button className="bg-[#FFD600] text-[#232323] font-semibold px-6 py-2 rounded-full w-fit self-end">
              Watch Streams
            </button>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src="/home/live-image-02.png"
                alt="Night has come"
                className="w-full h-65 object-cover"
              />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">LOREM IPSUM</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry text of the printing and typesetting industry
            </p>
            <button className="bg-[#FFD600] text-[#232323] font-semibold px-6 py-2 rounded-full w-fit self-end">
              Watch Streams
            </button>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src="/home/live-image-03.png"
                alt="Welcome"
                className="w-full h-65 object-cover"
              />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">LOREM IPSUM</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry text of the printing and typesetting industry
            </p>
            <button className="bg-[#FFD600] text-[#232323] font-semibold px-6 py-2 rounded-full w-fit self-end">
              Watch Streams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNow;
