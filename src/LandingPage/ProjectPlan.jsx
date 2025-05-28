import React, { useEffect, useState } from "react";
import { BiDollar, BiRocket } from "react-icons/bi";
import { CgMenuRound } from "react-icons/cg";
import { FaEdit, FaRegListAlt } from "react-icons/fa";
import { getAllRoadMaps } from "../api/landingpage-api"; // Your API call

const iconList = [
  <FaEdit />,
  <BiDollar />,
  <FaRegListAlt />,
  <BiRocket />,
  <CgMenuRound />
];

const colorList = [
  "text-[#00FFA3]",
  "text-[#FF8C00]",
  "text-[#FF3CAC]",
  "text-[#FCEE09]",
  "text-[#00B2FF]"
];

export default function ProjectPlan() {
  const [timeline, setTimeline] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getAllRoadMaps();
      if (Array.isArray(res?.data)) {
        setTimeline(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch roadmap data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="text-white py-20 px-6 font1">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="bg-gradient-to-r from-[#5E2FF4] via-[#C570FB] to-[#5E2FF4] bg-clip-text text-transparent uppercase font-bold text-3xl mb-10 tracking-widest">
          Road map
        </h1>
        <h2 className="text-4xl font-semibold mb-16 tracking-wide">Our project plan</h2>

        <div className="relative">
          {/* Vertical Lines */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start z-0">
            {timeline.map((_, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div className="w-[2px] bg-gray-700 h-full mt-10"></div>
              </div>
            ))}
          </div>

          {/* Timeline Items */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 z-10 max-w-6xl mx-auto">
            {timeline.map((phase, index) => (
              <div
                key={phase._id}
                className={`${
                  index % 2 === 1 ? "lg:pt-32 lg:after:top-[10.6rem]" : "pt-0"
                } lg:after:w-[1px] lg:after:h-[38%] lg:after:bg-[#fff]/50 lg:after:absolute lg:after:top-10 lg:after:left-5 lg:after:rounded-full relative`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`text-3xl w-10 h-10 border-white/50 flex items-center justify-center rounded-full border ${colorList[index % colorList.length]}`}
                  >
                    <p className="text-xl">{iconList[index % iconList.length]}</p>
                  </div>
                  <h3 className="text-base font-medium">{phase.milestone}</h3>
                </div>

                <div className="p-5 px-6 flex gap-3 flex-col">
                  <ul className="text-left list-disc list-inside space-y-2">
                    {phase.list.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        {item.trim()}
                      </li>
                    ))}
                    <li className="text-gray-300 text-sm">Status: {phase.status}</li>
                  </ul>
                </div>

                <div className="flex items-start">
                  <p className="text-sm text-gray-400 mb-4 whitespace-pre-line">
                    {phase.quarter} {phase.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
