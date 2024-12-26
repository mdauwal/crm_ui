import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Import ChevronDownIcon

interface AgentSkillPopupProps {
  onClose: () => void;
}

const AgentSkillPopup: React.FC<AgentSkillPopupProps> = ({ onClose }) => {
  const [isAccessAllowed, setIsAccessAllowed] = useState(false);
  const [isCardCollapsed, setIsCardCollapsed] = useState(false); // State for toggling card

  const handleAllowAccess = () => {
    setIsAccessAllowed(true);
  };

  const handleActivate = () => {
    onClose();
  };

  const toggleCard = () => {
    setIsCardCollapsed((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-5 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>

        {/* Header Section */}
        <div className="flex items-center mb-6">
          <img
            src="/copilot.jpeg" 
            alt="Copilot Icon"
            className="w-8 h-8 mr-3"
          />
          <h2 className="text-md font-semibold text-gray-700">Agent Skill</h2>
        </div>

        {/* Collapsible Card */}
        <div className="bg-white rounded-lg shadow-md relative">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={toggleCard}
          >
            <div className="flex items-center space-x-3">
              <p className="text-xs text-gray-800 font-semibold">
                Check if on-hand inventory will allow all sales orders to ship
                without delay.
              </p>
            </div>
            <ChevronDownIcon
              className={`w-5 h-5 text-gray-800 transition-transform ${
                isCardCollapsed ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Card Details */}
          {!isCardCollapsed && (
            <div className="px-4 pb-4">
              <p className="text-sm text-gray-800">
                <strong>When</strong>{" "}
                <span className="text-blue-800 bg-blue-50">any vendor</span> sends an email
                with changes to{" "}
                <span className="text-blue-800 bg-blue-50">confirmed purchase orders</span>,
                check if the resulting{" "}
                <span className="text-blue-800 bg-blue-50">on-hand inventory</span> will allow{" "}
                <span className="text-blue-800 bg-blue-50">all sales orders</span> to{" "}
                <span className="text-blue-800 bg-blue-50">ship without delay</span>. If so,{" "}
                <span className="text-blue-800 bg-blue-50">update the purchase order</span> to
                reflect the change.
              </p>
            </div>
          )}
        </div>

        {/* Enable Email Access Section */}
        <div className="mt-6">
        <div className="flex items-center mb-6">
          <img
            src="/outlook.jpg"
            alt="outlook Icon"
            className="w-5 h-5 mr-3"
          />
          <h2 className="text-md font-semibold text-gray-700">Enable email access</h2>
        </div>
          <p className="text-sm text-gray-600 mb-4">
            Allow the agent to access email inboxes to read mail from known
            vendors.
          </p>
          <div className="flex items-center space-x-4">
            {/* Email Field */}
<div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex-grow">
  <span className="flex items-center justify-center w-6 h-6 rounded-full text-black mr-2" style={{ backgroundColor: '#F6D6D6' }}>
    P
  </span>
  <p className="text-gray-700 truncate flex-1">
    purchasing@contoso.com
  </p>
  <button className="text-gray-400 hover:text-gray-600">✕</button>
</div>

            {/* Allow Access Button */}
            <button
              onClick={handleAllowAccess}
              className={`px-5 py-2 rounded-lg ${
                isAccessAllowed
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={isAccessAllowed}
            >
              Allow Access
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <button
            onClick={handleActivate}
            disabled={!isAccessAllowed}
            className={`px-4 py-2 rounded-lg ${
              isAccessAllowed
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Activate
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 border border-gray-800 text-black rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSkillPopup;
