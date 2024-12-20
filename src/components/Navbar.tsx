import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6 shadow-md">
      {/* Logo or Dashboard Title */}
      <div>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      {/* Search and Notifications */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute w-5 h-5 left-3 top-2 text-gray-400" />
          <input
            type="text"
            className="pl-10 pr-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
        <BellIcon className="w-6 h-6 cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Navbar;
