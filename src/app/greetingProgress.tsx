import React from "react";

const GreetingProgress = () => {
  return (
    <div className="bg-white p-3 sm:p-4">
      {/* Greeting and Progress */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 md:gap-4">
        {/* Greeting Section */}
        <div className="flex items-center w-full md:w-1/2">
          <img
            src="/copilot.jpeg"
            alt="Copilot Logo"
            className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2"
          />
          <h6 className="text-xs md:text-sm font-semibold text-gray-800 overflow-hidden text-ellipsis">
            Hi Mona, <span className="text-blue-600">68%</span> of goal achieved
            and the rest can be achieved by focusing on 20 top leads.
          </h6>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full md:w-1/2">
          {/* Progress Summary */}
          <div className="flex items-center justify-between mb-3 text-xs md:text-sm">
            <span className="text-gray-500">1 month until Q4 ends</span>
            <span className="text-gray-600">
              Target <span className="font-semibold text-black">$45 million</span>
            </span>
            <span className="text-gray-500">68% of target achieved</span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            {/* Won */}
            <div
              className="absolute top-0 left-0 h-2 bg-green-400 rounded-l-full"
              style={{ width: "40%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Won: $18m
              </div>
            </div>
            {/* Committed */}
            <div
              className="absolute top-0 left-[40%] h-2 bg-blue-500"
              style={{ width: "20%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Committed: $8m
              </div>
            </div>
            {/* Best Case */}
            <div
              className="absolute top-0 left-[60%] h-2 bg-purple-400"
              style={{ width: "10%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Best Case: $7m
              </div>
            </div>
            {/* Qualified */}
            <div
              className="absolute top-0 left-[70%] h-2 bg-orange-400"
              style={{ width: "5%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Qualified: $3m
              </div>
            </div>
            {/* Leads */}
            <div
              className="absolute top-0 left-[75%] h-2 bg-gray-400 rounded-r-full"
              style={{ width: "25%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Leads: $75m
              </div>
            </div>
          </div>

          {/* Progress Legends */}
          <div className="flex flex-wrap justify-between mt-3 gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Won $18m
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              Committed $8m
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              Best case $7m
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              Qualified $3m
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              Leads $75m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingProgress;
