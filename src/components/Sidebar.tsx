import { 
  HomeIcon, 
  UserIcon, 
  CogIcon, 
  BriefcaseIcon, 
  ClipboardDocumentIcon, 
  UsersIcon 
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-center">CRM Dashboard</h1>
      </div>
      {/* Navigation */}
      <nav className="flex-grow mt-4 space-y-6">
        {/* My Work */}
        <div>
          <h2 className="text-sm font-semibold px-6 text-gray-400 uppercase tracking-wider">
            My Work
          </h2>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 transition">
              <ClipboardDocumentIcon className="w-5 h-5 mr-2 text-red-500" />
              <span>Leads</span>
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 transition">
              <BriefcaseIcon className="w-5 h-5 mr-2" />
              <span>Opportunities</span>
            </li>
          </ul>
        </div>
        {/* Customers */}
        <div>
          <h2 className="text-sm font-semibold px-6 text-gray-400 uppercase tracking-wider">
            Customers
          </h2>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 transition">
              <UsersIcon className="w-5 h-5 mr-2" />
              <span>Accounts</span>
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 transition">
              <UserIcon className="w-5 h-5 mr-2" />
              <span>Contacts</span>
            </li>
          </ul>
        </div>
        {/* Sales */}
        <div>
          <h2 className="text-sm font-semibold px-6 text-gray-400 uppercase tracking-wider">
            Sales
          </h2>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 transition">
              <HomeIcon className="w-5 h-5 mr-2" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 transition">
              <CogIcon className="w-5 h-5 mr-2" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
