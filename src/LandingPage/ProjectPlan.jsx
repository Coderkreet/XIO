import React from "react";
import { BiDollar, BiRocket } from "react-icons/bi";
import { CgMenuRound } from "react-icons/cg";
import { FaEdit, FaRegListAlt } from "react-icons/fa";

const timeline = [
    {
        title: "Project Plan",
        color: "text-[#00FFA3]",
        quarter: "Q1\n2022",
        items: ["Website Design", "Website Live", "Smart Contract", "Deployment"],
        icon: <FaEdit />
    },
    {
        title: "Presale",
        color: "text-[#FF8C00]",
        quarter: "Q2\n2023",
        items: ["Contract Testing", "Project Prototype", "Metaverse Demo", "(Alpha)"],
        icon: <BiDollar />
    },
    {
        title: "Pre–Listing",
        color: "text-[#FF3CAC]",
        quarter: "Q3\n2024",
        items: ["Partnerships", "Marketing to reach wider Audiences", "Metaverse Development"],
        icon: <FaRegListAlt />
    },
    {
        title: "Token Launch",
        color: "text-[#FCEE09]",
        quarter: "Q4\n2025",
        items: ["NFT MarketPlace", "NFT Launch", "Exchanges Listing", "Dex Listing"],
        icon: <BiRocket />
    },
    {
        title: "Alpha Test",
        color: "text-[#00B2FF]",
        quarter: "Q5\n2026",
        items: ["In-house testing of functional", "App development", "Further Development"],
        icon: <CgMenuRound />
    }
];

export default function ProjectPlan() {
    return (
        <section className=" text-white py-20 px-6 font1">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="bg-gradient-to-r from-[#5E2FF4] via-[#C570FB] to-[#5E2FF4] bg-clip-text text-transparent uppercase font-bold text-center text-3xl mb-10 tracking-widest">Road map</h1>
                <h2 className="text-4xl font-semibold mb-16 tracking-wide">Our project plan</h2>

                <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-between items-start z-0">
                        {timeline.map((_, index) => (
                            <div key={index} className="flex flex-col items-center w-full">
                                <div className="w-[2px] bg-gray-700 h-full mt-10"></div>
                            </div>
                        ))}
                    </div>

                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 z-10 max-w-6xl mx-auto">
                        {timeline.map((phase, index) => (
                            <div
                                key={index}
                                className={`${(index === 1 || index === 3) ? "lg:pt-32 lg:after:top-[10.6rem]" : "pt-0"} lg:after:w-[1px] lg:after:h-[38%] lg:after:bg-[#fff]/50 lg:after:absolute lg:after:top-10 lg:after:left-5 lg:after:rounded-full relative`}
                            >
                                <div className="flex items-center  gap-2">
                                    <div className={`text-3xl  w-10 h-10 border-white/50 flex items-center justify-center rounded-full border ${phase.color}`}>
                                        <p className="text-xl">{phase.icon}</p>
                                    </div>
                                    <h3 className={`text-base font-medium`}>{phase.title}</h3>
                                </div>
                                <div className="p-5 px-6 flex gap-3 flex-col">
                                    <ul className="text-left list-disc list-inside space-y-2">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-start">
                                    <p className="text-sm text-gray-400 mb-4 whitespace-pre-line">{phase.quarter}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}