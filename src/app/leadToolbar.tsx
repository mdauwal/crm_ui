import React from "react";

const LeadToolbar = () => {
  return (
    <div className="bg-white shadow-md border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left Dropdown */}
      <div className="flex items-center">
        <select
          className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="My open leads"
        >
          <option value="My open leads">My open leads</option>
          <option value="Closed leads">Closed leads</option>
          <option value="All leads">All leads</option>
        </select>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-chart-bar mr-2"></i> Show chart
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-list-ul mr-2"></i> Focused view
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-plus mr-2"></i> New
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-sync-alt mr-2"></i> Refresh
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-users mr-2"></i> Collaborate
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-trash-alt mr-2"></i> Delete
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-filter mr-2"></i> Edit filters
        </button>
        <button className="flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium">
          <i className="fas fa-columns mr-2"></i> Edit columns
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
          <i className="fas fa-share-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default LeadToolbar;
