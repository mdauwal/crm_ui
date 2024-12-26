import React from "react";

interface EnhancedHeaderProps {
  search: any; // The current search string
  setSearch: (value: string) => void; // A function to update the search string
}

const EnhancedHeader: React.FC<EnhancedHeaderProps> = ({ search, setSearch }) => {
  return (
    <div className="flex justify-start items-center mb-4 p-4 rounded-lg bg-gradient-to-r from-white via-gray-50 to-white">
      {/* Search Input */}
      <div className="relative w-full sm:w-1/3">
        <input
          type="text"
          placeholder="Sort, filter, and search with Copilot"
          className="border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md p-2 text-sm w-full shadow-sm pr-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Icon inside input */}
        <img
          alt="copilot"
          src="/copilot.jpeg"
          width={30} // Required when not using `fill`
          height={50}
          className="rounded-full mr-1 absolute right-3 top-2/4 transform -translate-y-2/4"
        />
        {/* Uncomment this if you are using an icon like FontAwesome */}
        {/* <FaRobot className="absolute right-3 top-2/4 transform -translate-y-2/4 text-blue-600 text-xl" /> */}
      </div>
    </div>
  );
};

export default EnhancedHeader;
