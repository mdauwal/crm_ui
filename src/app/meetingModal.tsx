import React, { useState } from "react";

const MeetingModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle the form submission
    console.log("Meeting prepared!");
    closeModal();
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="text-xs text-gray-700 hover:underline cursor-pointer"
      >
        Prepare a meeting with Allan
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Prepare Meeting with Allan
            </h2>

            <form onSubmit={handleFormSubmit}>
              {/* Meeting Title */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                  Meeting Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter meeting title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Date */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Time */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter meeting details"
                  className="resize-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Prepare Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingModal;
