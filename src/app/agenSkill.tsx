import React from "react";

interface AgentSkillPopupProps {
  onClose: () => void; // Ensure onClose is typed as a function that takes no arguments and returns void
}

const AgentSkillPopup: React.FC<AgentSkillPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="text-xl font-semibold mb-4">Agent Skill</h2>
        <p className="text-gray-600 mb-4">
          Check if on-hand inventory will allow all sales orders to ship without delay.
        </p>

        {/* Steps */}
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
              1
            </span>
            When any vendor sends an email with changes to confirmed purchase orders...
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
              2
            </span>
            Update the purchase order to reflect the change.
          </li>
        </ul>

        {/* Enable Email Access */}
        <div className="mt-4">
          <h3 className="font-semibold">Enable Email Access</h3>
          <p className="text-gray-600">
            Allow the agent to access email inboxes to read mail from known vendors.
          </p>
          <input
            type="email"
            placeholder="purchasing@contoso.com"
            className="mt-2 w-full border rounded px-4 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Allow Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSkillPopup;
