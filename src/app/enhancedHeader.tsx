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
          className="border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md p-2 text-sm w-full shadow-sm pr-14" // Increased padding-right for image space
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Icon inside input */}
        <img
  alt="copilot"
  src="/copilot.jpeg"
  width={20}
  height={20}
  className="rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 sm:right-3 sm:width[30px] sm:height[30px]" 
/>

      </div>
    </div>
  );
};

export default EnhancedHeader;
