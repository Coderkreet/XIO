import React, { useState } from "react";
import shadow1 from "../../src/userAssets/shadow1.png";
import shadow2 from "../../src/userAssets/shadow2.png";

const tabs = ["General", "Pre-ICO", "CEX Tokens", "Other"];
const faqData = {
  General: [
    {
      question: "What does all of this mean?",
      answer:
        "We created an innovative, fully practical platform for the purchase and sale of tokens.",
    },
    {
      question: "Why is Crypto raising money from ICO?",
      answer:
        "Our goal is to raise capital necessary to establish most of the investments we’ve included in the project and give our platform powerful development. We gain great benefits from the pre-sale and allow everyone to participate.",
    },
    {
      question: "What is the Crypto purchase?",
      answer:
        "The total number of people involved in this sale and purchases shows enormous interest in development. We gain great benefits for everyone.",
    },
  ],
  "Pre-ICO": [],
  "CEX Tokens": [],
  Other: [],
};

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <section className="relative text-3xl bg-[#050017] font1">
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Form Section */}
          <div>
            <div className="flex items-center gap-4 mb-4 text-3xl  md:text-lg text-gray-400">
              <span className="font-semibold text-white text-3xl">07</span>
              <div className="h-px text-3xl w-10 bg-gray-600" />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Answers to the Most <br /> Popular Questions
            </h2>
            <p className="mb-6 text-3xl  text-gray-300">
              Didn't find the answer? Write to us
            </p>
            <form className="flex text-3xl flex-col space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent text-3xl border-b border-gray-500 py-3 px-2 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent text-3xl border-b border-gray-500 py-3 px-2  text-white focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="bg-transparent border-b border-gray-500 py-3 px-2 text-3xl text-white focus:outline-none resize-none"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="border border-purple-500 text-purple-500 py-2 px-8 text-3xl rounded-full shadow-[0px_0px_10px_#F20127] transition-all duration-300 w-fit"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: FAQ Section */}
          <div>
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-base md:text-lg font-medium pb-1 border-b-2 transition-all ${
                    activeTab === tab
                      ? "text-white border-purple-500"
                      : "text-gray-400 border-transparent hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-6 text-3xl">
              {faqData[activeTab].length > 0 ? (
                faqData[activeTab].map((item, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-white text-3xl md:text-xl">
                      {item.question}
                    </h3>
                    <p className="text-gray-400 text-xl mt-2 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-xl ">
                  No FAQs available in this category yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Shadows */}
      <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none">
        <img src={shadow2} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <img src={shadow1} className="w-full h-full object-cover" alt="" />
      </div>
    </section>
  );
};

export default FaqSection;
