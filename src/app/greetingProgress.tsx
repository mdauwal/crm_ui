import React from "react";

const GreetingProgress = () => {
  return (
    <div className="bg-white">
      {/* Greeting and Progress */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Greeting Section */}
        <div className="flex items-center w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="/copilot.jpeg"
            alt="Copilot Logo"
            className="w-8 h-8 rounded-full mr-3" // Adjusted size and margin
          />
          <h1 className="text-xs font-semibold text-gray-800 flex-1">
            Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and the rest can be achieved by focusing on 20 top leads.
          </h1>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full ml-3 md:w-1/2">
          {/* Progress Summary */}
          <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">1 month until Q4 ends</span>
            <span className="text-xs font-medium text-gray-600">
              Target <span className="font-semibold text-black">$45 million</span>
            </span>
            <span className="text-xs text-gray-500">68% of target achieved</span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            {/* Won */}
            <div
              className="absolute top-0 left-0 h-2 bg-green-500 rounded-l-full hover:z-10"
              style={{ width: "40%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Won: $18m
              </div>
            </div>
            {/* Committed */}
            <div
              className="absolute top-0 left-[40%] h-2 bg-blue-500 hover:z-10"
              style={{ width: "20%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Committed: $8m
              </div>
            </div>
            {/* Best Case */}
            <div
              className="absolute top-0 left-[60%] h-2 bg-purple-400 hover:z-10"
              style={{ width: "10%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Best Case: $7m
              </div>
            </div>
            {/* Qualified */}
            <div
              className="absolute top-0 left-[70%] h-2 bg-orange-400 hover:z-10"
              style={{ width: "5%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Qualified: $3m
              </div>
            </div>
            {/* Leads */}
            <div
              className="absolute top-0 left-[75%] h-2 bg-gray-400 rounded-r-full hover:z-10"
              style={{ width: "25%" }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                Leads: $75m
              </div>
            </div>
          </div>

          {/* Progress Legends */}
          <div className="flex flex-wrap justify-between mt-2 text-xs text-gray-500">
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Won $18m
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              Committed $8m
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
              Best case $7m
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
              Qualified $3m
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              Leads $75m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingProgress;
