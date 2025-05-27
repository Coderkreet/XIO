import React, { useEffect, useState } from 'react';
import group from '../../src/userAssets/group1.png';
import { getAllWhyChooseUs } from '../api/landingpage-api'; // Adjust import path if needed

const Choose = () => {
  const [chooseData, setChooseData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAllWhyChooseUs();
      if (Array.isArray(response?.data?.data)) {
        setChooseData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching choose us data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full bg-[#0B0C2A] text-white py-16 px-4 sm:px-8 md:px-12 font-sans">
      <div className="font1 flex flex-col gap-6 max-w-7xl mx-auto text-center">
        <h1 className="bg-gradient-to-r from-[#5E2FF4] via-[#C570FB] to-[#5E2FF4] bg-clip-text text-transparent uppercase font-bold text-2xl sm:text-3xl">WHY CHOOSE US</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">Why choose our token?</h2>

        <div className="flex justify-center my-6">
          <img src={group} alt="Group Illustration" className="max-w-full h-auto" />
        </div>

        {/* Dynamic cards or list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {chooseData.map((item) => (
            <div key={item._id} className="p-6 rounded-xl bg-[#151530] shadow-lg border border-[#292b45] hover:shadow-xl transition">
              <p className="text-lg text-white font-semibold">{item.text}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
