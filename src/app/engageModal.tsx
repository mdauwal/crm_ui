"use client";  // Mark this file as a client component

import { useState } from "react";

export default function EngageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"engage" | "search">("engage"); // Explicit type for activeTab

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      {/* Button to open the modal */}
      <p
        className="text-xs text-gray-700 hover:underline cursor-pointer"
        onClick={toggleModal}
      >
        Engage with Jane Reyes
      </p>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal content with animation */}
          <div
            className="bg-white rounded-lg shadow-lg max-w-lg sm:max-w-3xl w-full transform transition-all duration-300 scale-95 sm:scale-100 animate-fadeIn"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <img
                src="/mail.png"
                alt="email reyes"
                className="w-8 h-8 rounded-md mr-4"
              />
              <h2 className="text-sm font-semibold">Engage with Jane Reyes</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                &times;
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex items-center p-4">
              <img
                src="/jane.jpg"
                alt="Jane Reyes"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Jane Reyes</p>
                <p className="text-sm text-gray-500">
                  COO, Northwind Traders
                </p>
              </div>
            </div>

            {/* Highlighted Note */}
            <div className="bg-blue-50 p-4 mx-4 rounded-full">
              <p className="text-sm text-blue-800">
                Jane may be interested in upgrading espresso machines for her
                in-store coffee shops.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-start items-center border-b mt-4 mx-4">
              <button
                className={`px-4 py-2 ${
                  activeTab === "engage"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("engage")}
              >
                Engage
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "search"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("search")}
              >
                Search
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4">
              {activeTab === "engage" ? (
                <div>
                  {/* Why I picked this lead */}
                  <h3 className="font-semibold mb-2">Why I picked this lead</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                    <li>
                      Jane is a key decision maker and was browsing{" "}
                      <strong>espresso machines</strong> on First Coffee's
                      website.
                    </li>
                    <li>
                      Multiple people at her company reported "slowness" during{" "}
                      <strong>service requests</strong>.
                    </li>
                    <li>
                      Northwind Traders currently see{" "}
                      <strong>$200M in revenue</strong> from their in-store
                      coffee shops.
                    </li>
                  </ul>

                  {/* Lead Details */}
                  <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-500">✔</span>
                      <span>Decision Maker: Yes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">💰</span>
                      <span>Potential deal value: $1M</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-500">🔥</span>
                      <span>Intent: High</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700">
                    Search functionality coming soon...
                  </p>
                </div>
              )}
            </div>

            {/* About Section */}
            <div className="bg-gray-100 p-4 rounded-md mx-4 my-4">
              <h3 className="font-semibold">About Jane</h3>
              <p className="text-sm text-gray-700">
                Jane Reyes, the Chief Operating Officer of Northwind Traders, is
                a dynamic leader with a proven track record in optimizing
                operations and enhancing customer experiences.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
