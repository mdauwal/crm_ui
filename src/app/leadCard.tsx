import React, { useState, useEffect } from "react";
import GreetingProgress from "./greetingProgress";
import EngageModal from "./engageModal";
import MeetingModal from "./meetingModal";
import ScheduleMeetingModal from "./scheduleModal";

const LeadCard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // Handler to open the modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const [currentLead, setCurrentLead] = useState(0);
  
  const [isEngageModalOpen, setIsEngageModalOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check window width on the client
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize(); // Run on initial render
    window.addEventListener("resize", checkScreenSize); // Update on resize

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);


  const openEngageModal = () => setIsEngageModalOpen(true);
  const closeEngageModal = () => setIsEngageModalOpen(false);

  const openMeetingModal = () => setIsMeetingModalOpen(true);
  const closeMeetingModal = () => setIsMeetingModalOpen(false);

  // Sample lead data
  const leads = [
    {
      name: "Jane Reyes",
      role: "COO - Northwind Traders",
      avatar: "/jane.jpg",
      info: (
        <>
          <div className="flex items-center mb-4">
            <img
              src="/email.jpg"
              alt="Email Icon"
              className="w-6 h-6 rounded-full mr-3"
            />
            <span
              className="text-xs text-gray-700 hover:underline cursor-pointer"
              onClick={openEngageModal}
            >
              <EngageModal />
            </span>
          </div>
          <span className="text-xs text-gray-700">
            Jane may be interested in upgrading espresso machines for her
            in-store coffee shops.
          </span>
        </>
      ),
      extra: "Expand business · High buying intent",
    },
    {
      name: "Allan Munger",
      role: "Head of Real Estate Development - Contoso Coffee",
      avatar: "/alan.jpg",
      info: (
        <div className="bg-blue-50">
          <div className="flex items-center mb-4">
            <img
              src="/prepare.png"
              alt="Prepare Icon"
              className="w-6 h-6 mr-3"
            />
            <span
              className="text-xs text-gray-700 hover:underline cursor-pointer"
              onClick={openMeetingModal}
            >
              <MeetingModal />
            </span>
          </div>
          <span className="text-xs text-gray-700">
            Prepare for high-buying intent meeting Copilot scheduled for 2 PM
            regarding upgrading service contract.
          </span>
        </div>
      ),
      extra: "Upcoming meeting · Due today",
    },
    {
      name: "Auwal Yahaya",
      role: "Product Manager - AfriFarma",
      avatar: "/auwal.jpeg",
      info: (
        <div className="bg-blue-50">
          <div className="flex items-center mb-4">
            <img
              src="/product.png"
              alt="Product Icon"
              className="w-6 h-6 mr-3"
            />
            <span
              onClick={handleOpenModal}
              className="text-xs text-gray-700 hover:underline cursor-pointer"
            >
              Schedule a Meeting with Auwal
            </span>
          </div>
          <span className="text-xs text-gray-700">
            Prepare for high-buying intent product scheduled for 2 PM
            regarding upgrading service contract.
          </span>
        </div>
      ),
      extra: "High interest · Schedule demo",
    },
  ];

  // Slide to the next lead
  const handleNext = () => {
    setCurrentLead((prev) => (prev + 1) % leads.length);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-blue-300 max-w-6xl mx-auto">
      <GreetingProgress />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Lead Highlights */}
        <div className="flex-[2] bg-white relative">
          <p className="text-sm text-gray-500 mb-4">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </p>

          <div className="flex overflow-hidden gap-4 relative">
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md"
              onClick={handleNext}
            >
              &#8594;
            </button>

            {/* Lead Cards */}
            {leads.map((lead, index) => {
              const isVisible =
                index === currentLead ||
                (index === (currentLead + 1) % leads.length && isLargeScreen);
              return (
                <div
                  key={index}
                  className={`flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200 transition-transform ${isVisible ? "block" : "hidden"}`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={lead.avatar}
                      alt={lead.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        {lead.name}
                      </h3>
                      <p className="text-xs text-gray-500">{lead.role}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-2 rounded">
                    <div className="text-xs text-gray-700">{lead.info}</div>
                  </div>

                  <button className="mt-4 text-sm text-gray-800 font-medium hover:underline">
                    {lead.extra}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Key Activities */}
        <div className="flex-[1] bg-white shadow-md rounded-lg p-6 border border-gray-300">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">
            Other key activities
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="text-sm text-gray-800">Cafe A100 for Woodland Bank</p>
                <p className="text-xs text-gray-500">$280,000 · 8 days to close</p>
              </div>
              <button className="mt-4 text-sm text-gray-600 font-medium hover:underline">
                Review draft
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div>
                <p className="text-sm text-gray-800">Partnership opportunity for Fabrikam</p>
                <p className="text-xs text-gray-500">$5,000,000 · 12 days to close</p>
              </div>
              <button className="mt-4 text-sm text-gray-600 font-medium hover:underline">
                Prepare
              </button>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-800 hover:underline">
            Show all key activities
          </button>
        </div>
      </div>

      {/* Modals */}
      {isModalOpen && <ScheduleMeetingModal onClose={handleCloseModal} />}
      {isEngageModalOpen && <EngageModal onClose={closeEngageModal} />}
      {isMeetingModalOpen && <MeetingModal onClose={closeMeetingModal} />}
    </div>
  );
};

export default LeadCard;
