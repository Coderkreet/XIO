
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { getFaqs } from "../api/landingpage-api"; // ✅ Make sure this path is correct

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFaqs();
        if (Array.isArray(res)) {
          setFaqs(res);
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      }
    };
    fetchData();
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  return (
    <section className="relative bg-[#050017] py-16 px-4 font1">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-xl mt-3">
          Below is a list of frequently asked questions and answers from partners.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Please check this FAQ before contacting us.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="space-y-4">
            {column.map((item, idx) => {
              const globalIndex = colIdx === 0 ? idx : idx + mid;
              const isOpen = openIndex === globalIndex;

              return (
                <div
                  key={item._id || globalIndex}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAnswer(globalIndex)}
                    className={`w-full text-left px-4 py-3 bg-[#100029] text-white font-medium flex items-center justify-between ${
                      isOpen
                        ? "bg-gradient-to-r from-[#27B9DE] to-[#D426F6]"
                        : "hover:bg-gradient-to-r hover:from-[#27B9DE] hover:to-[#D426F6]"
                    }`}
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <FaChevronUp className="ml-4" />
                    ) : (
                      <FaChevronDown className="ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 py-3 bg-[#0F0F1A] text-gray-300 text-sm">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

