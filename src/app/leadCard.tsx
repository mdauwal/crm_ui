import React from "react";
import GreetingProgress from "./greetingProgress";

const LeadCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 max-w-6xl mx-auto">
      <GreetingProgress />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Lead Highlights */}
<div className="flex-[2]">
  <p className="text-sm text-gray-500 mb-4">
    Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
  </p>
  <div className="flex gap-4">
    {/* Lead 1 */}
    <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src="/jane.jpg" // Replace with the actual path for Jane's image
          alt="Jane Reyes"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Jane Reyes</h3>
          <p className="text-xs text-gray-500">COO - Northwind Traders</p>
        </div>
      </div>

      <div className="bg-blue-50">
        {/* Email Info */}
      <div className="flex items-center mb-4">
        <img
          src="/email.jpg" // Replace with the actual path for the email icon
          alt="Email Icon"
          className="w-6 h-6 rounded-full mr-3"
        />
        <p className="text-xs text-gray-700">Engage with Jane Reyes</p>
      </div>

      <p className="text-xs text-gray-700">
        Jane may be interested in upgrading espresso machines for her in-store coffee shops.
      </p>
      </div>
      <button className="mt-4 text-sm text-gray-800 font-medium hover:underline">
        Expand business · High buying intent
      </button>
    </div>

    {/* Lead 2 */}
    <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src="/alan.jpg" // Replace with the actual path for Allan's image
          alt="Allan Munger"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Allan Munger</h3>
          <p className="text-xs text-gray-500">
            Head of Real Estate Development - Contoso Coffee
          </p>
        </div>
      </div>

      {/* Prepare Info */}
      <div className="bg-blue-50">
      <div className="flex items-center  mb-4">
        <img
          src="/prepare.png" // Replace with the actual path for the prepare icon
          alt="Prepare Icon"
          className="w-6 h-6 mr-3"
        />
        <p className="text-xs text-gray-700">Prepare for meeting with Allan</p>
      </div>

      <p className="text-xs text-gray-700">
        Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.
      </p>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        <span className="font-medium text-gray-800">Upcoming meeting</span> · Due today
      </p>
    </div>
  </div>
</div>


        {/* Right Side: Key Activities */}
        <div className="flex-[1]">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">Other key activities</h3>
          <div className="space-y-4">
            {/* Activity 1 */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="text-sm text-gray-800">Cafe A100 for Woodland Bank</p>
                <p className="text-xs text-gray-500">$280,000 · 8 days to close</p>
              </div>
              <button className="mt-4 text-sm text-blue-600 font-medium hover:underline">
                Review draft
              </button>
            </div>

            {/* Activity 2 */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="text-sm text-gray-800">Partnership opportunity for Fabrikam</p>
                <p className="text-xs text-gray-500">$5,000,000 · 12 days to close</p>
              </div>
              <button className="mt-4 text-sm text-blue-600 font-medium hover:underline">
                Prepare
              </button>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-600 font-medium hover:underline">
            Show all key activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
