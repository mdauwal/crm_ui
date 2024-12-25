import { useState } from "react";
export default function EngageModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"engage" | "search">("engage");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      {/* Button to open the modal */}
      <span
        className="text-xs text-gray-700 hover:underline cursor-pointer"
        onClick={toggleModal}
      >
        Engage with Jane Reyes
      </span>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg sm:max-w-3xl w-full transform transition-all duration-300">
            {/* Modal Header */}
            <div className="flex items-center p-4 border-b">
              <img
                src="/mail.png"
                alt="email reyes"
                className="w-8 h-8 rounded-md mr-2"
              />
              <h2 className="text-base font-semibold flex-1 text-gray-800">
                Engage with Jane Reyes
              </h2>
              <button
                className="text-gray-400 hover:text-gray-600 text-xl"
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
                <p className="font-semibold text-gray-800">Jane Reyes</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <img
                    src="/linkedln.png"
                    alt="LinkedIn"
                    className="w-5 h-5 mr-2"
                  />
                  <span className="text-gray-400 mx-1">|</span>
                  COO, Northwind Traders
                </p>
              </div>
            </div>

            {/* Highlighted Note */}
            <div className="bg-blue-50 p-4 mx-4 my-2 rounded-lg shadow-sm flex items-start space-x-4">
              {/* Left Section with Star Image */}
              <img
                src="/stars.png"
                alt="Star Icon"
                className="w-6 h-6 mt-1"
              />
              <div className="flex-1">
                <p className="text-sm text-blue-800">
                  Jane may be interested in upgrading espresso machines for her
                  in-store coffee shops.
                </p>
                <div className="flex mt-3 space-x-3">
                  {/* Edit Button */}
                  <button className="flex items-center justify-center text-blue-800 border border-blue-800 text-xs px-4 py-2 rounded hover:bg-blue-100">
                    <img
                      src="/pens.png"
                      alt="Edit"
                      className="w-4 h-4 mr-2"
                    />
                    Edit
                  </button>
                  {/* Approve and Send Button */}
                  <button className="flex items-center justify-center text-white bg-blue-800 text-xs px-4 py-2 rounded hover:bg-blue-900">
                    <img
                      src="/sends.png"
                      alt="Send"
                      className="w-4 h-4 mr-2"
                    />
                    Approve and send
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b mt-4 mx-4">
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
            <div className="p-4 bg-blue-50 rounded-lg shadow-sm mx-4 my-2">
              {activeTab === "engage" ? (
                <div>
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
                </div>
              ) : (
                <p className="text-gray-700">Search functionality coming soon...</p>
              )}
            </div>

            {/* About Section */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300 p-4 mx-4 my-4">
              <h3 className="font-semibold mb-3 text-black">About Jane</h3>
              <p className="text-sm text-black-100">
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
