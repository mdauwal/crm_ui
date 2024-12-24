import React, { useState } from "react";

interface AgentSkillPopupProps {
  onClose: () => void;
}

const AgentSkillPopup: React.FC<AgentSkillPopupProps> = ({ onClose }) => {
  // State to track if "Allow Access" has been clicked
  const [isAccessAllowed, setIsAccessAllowed] = useState(false);

  // Handle "Allow Access" button click
  const handleAllowAccess = () => {
    setIsAccessAllowed(true);
  };

  // Handle "Activate" button click
  const handleActivate = () => {
    onClose(); // Close the popup
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Background */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
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
            src="/copilot.jpg" // Replace with the correct path
            alt="Copilot Icon"
            className="w-8 h-8 rounded-full mr-3"
          />
          <h2 className="text-xl font-semibold text-gray-800">Agent Skill</h2>
        </div>

        {/* Description Section */}
        <p className="text-gray-700 mb-4">
          Check if on-hand inventory will allow all sales orders to ship without delay.
        </p>

        {/* Steps Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700 mb-3">
            <strong>When</strong> <span className="text-blue-600">any vendor</span> sends an email with changes to{" "}
            <span className="text-blue-600">confirmed purchase orders</span>, check if the resulting{" "}
            <span className="text-blue-600">on-hand inventory</span> will allow{" "}
            <span className="text-blue-600">all sales orders</span> to{" "}
            <span className="text-blue-600">ship without delay</span>. If so,{" "}
            <span className="text-blue-600">update the purchase order</span> to reflect the change.
          </p>
        </div>

        {/* Enable Email Access Section */}
        <div className='mb-12'>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Enable Email Access
          </h3>
          <p className="text-gray-600 mb-3">
            Allow the agent to access email inboxes to read mail from known vendors.
          </p>
          <div className="flex items-center space-x-4">
            {/* Wider Input Field */}
            <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex-1">
              <span className="text-gray-600 mr-2">📧</span>
              <p className="text-gray-700 truncate flex-1">purchasing@contoso.com</p>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            {/* Allow Access Button */}
            <button
              onClick={handleAllowAccess}
              className={`px-5 py-2 rounded-lg ${
                isAccessAllowed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={isAccessAllowed}
            >
              Allow Access
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          {/* Activate Button */}
          <button
            onClick={handleActivate}
            disabled={!isAccessAllowed}
            className={`px-4 py-2 rounded-lg ${
              isAccessAllowed
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          >
            Activate
          </button>
          {/* Close Button */}
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
