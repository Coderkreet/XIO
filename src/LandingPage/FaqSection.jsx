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
  <section className="bg-[#0f011f] text-white py-20 px-4 sm:px-10 font1">
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
    <p className="text-lg sm:text-xl text-gray-400">
      Below is a list of frequently asked questions and answers from partners.
      <br className="hidden sm:block" />
      Please check this FAQ before contacting us.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    {faqs.map((faq, index) => (
      <div
        key={faq._id || index}
        className="bg-gradient-to-r from-[#1B0039] to-[#210240] border border-[#6617e2] rounded-lg p-4 sm:p-5"
      >
        <button
          onClick={() => toggleIndex(index)}
          className="flex justify-between items-center w-full text-left gap-4"
        >
          <span className="text-base sm:text-lg md:text-xl font-medium text-white">
            {faq.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </button>
        {openIndex === index && (
          <div className="mt-4 text-sm sm:text-base text-purple-100 leading-relaxed">
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
