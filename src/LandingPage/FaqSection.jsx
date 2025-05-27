import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getFaqs } from "../api/landingpage-api"; // ✅ Adjust the path if needed

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getFaqs();
      if (Array.isArray(res) && res.length) {
        setFaqs(res); // ✅ Save API FAQs into state
      }
    } catch (err) {
      console.error("Error fetching FAQs:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f011f] text-white py-20 px-4 sm:px-10 relative font1">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-3xl sm:text-2xl">
          Below is a list of frequently asked questions. Please check the FAQ before contacting support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={faq._id || index}
            className="bg-gradient-to-r from-[#251151] to-[#180730] rounded-xl p-3 transition-all border border-purple-900 shadow-lg"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-5xl sm:text-4xl font-medium text-white">{faq.question}..?</span>
              <ChevronDown
                className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-3 text-2xl sm:text-2xl text-green-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
