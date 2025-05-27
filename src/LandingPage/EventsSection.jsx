import React, { useEffect, useState } from "react";
import { getEvent } from "../api/landingpage-api"; // ✅ Adjust this path to your actual API call

const tabs = ["Events", "Upcoming Events", "Gallery"];

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("Events");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getEvent();
        if (res?.data && Array.isArray(res.data)) {
          setEvents(res.data);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchData();
  }, []);

  // Filter data based on selected tab
  const renderData = events.filter((event) => {
    if (activeTab === "Events") return event.type === "event";
    if (activeTab === "Upcoming Events") return event.type === "upcoming";
    if (activeTab === "Gallery") return event.type === "gallery";
    return false;
  });

  return (
    <section className="w-full bg-gradient-to-br from-[#0e1a2b] to-[#05141f] py-16 px-4 text-white font-sans">
      <div className="max-w-7xl w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">Events</h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md border transition duration-300 text-sm sm:text-base font-medium ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white shadow-lg"
                  : "bg-transparent border-white hover:bg-white hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        {renderData.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {renderData.map((event, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-[#101f34]"
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={
                      event.image.startsWith("http")
                        ? event.image
                        : "/default-image.jpg"
                    }
                    alt={event.text || "Event Image"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-white text-sm sm:text-base">
                  {event.text}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-lg">No events available.</p>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
