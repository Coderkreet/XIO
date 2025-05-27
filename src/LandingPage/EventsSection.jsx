import React, { useState } from "react";
import Event1 from "../../src/userAssets/images/11.webp";

const tabs = ["Events", "Upcoming Events", "Gallery"];

const tabData = {
  Events: [
    { img: Event1, alt: "Event 1" },
    { img: Event1, alt: "Event 2" },
    { img: Event1, alt: "Event 3" },
    { img: Event1, alt: "Event 4" },
    { img: Event1, alt: "Event 5" },
    { img: Event1, alt: "Event 6" },
  ],
  "Upcoming Events": [
    { img: Event1, alt: "Upcoming Event 1" },
    { img: Event1, alt: "Upcoming Event 2" },
  ],
  Gallery: [
    { img: Event1, alt: "Gallery Image 1" },
    { img: Event1, alt: "Gallery Image 2" },
    { img: Event1, alt: "Gallery Image 3" },
  ],
};

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("Events");

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

        {/* Images Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {tabData[activeTab].map((event, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={event.img}
                  alt={event.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
