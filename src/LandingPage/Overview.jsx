import React, { useEffect, useState } from "react";
import awardImage from "../../src/userAssets/images/overview.webp";
import {
  FaNetworkWired,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { getOverview } from "../api/landingpage-api";
const Overview = () => {
  const [overviewData, setOverviewData] = useState([]);
  const [dynamicImage, setDynamicImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const icons = [
    <FaNetworkWired className="text-pink-500 text-2xl" />,
    <FaUsers className="text-blue-400 text-2xl" />,
    <FaShieldAlt className="text-cyan-400 text-2xl" />,
    <FaChartLine className="text-purple-400 text-2xl" />,
  ];

  const iconBorders = [
    "border-pink-500 bg-pink-500/10 shadow-pink-500/20",
    "border-blue-400 bg-blue-400/10 shadow-blue-400/20",
    "border-cyan-400 bg-cyan-400/10 shadow-cyan-400/20",
    "border-purple-400 bg-purple-400/10 shadow-purple-400/20",
  ];

  const gradients = [
    "from-pink-500/20 to-pink-600/5",
    "from-blue-400/20 to-blue-500/5",
    "from-cyan-400/20 to-cyan-500/5",
    "from-purple-400/20 to-purple-500/5",
  ];

  const fetchData = async () => {
    try {
      const response = await getOverview();
      if (Array.isArray(response?.data)) {
        setOverviewData(response.data);
        
        // Find the first item with an imageUrl
        const itemWithImage = response.data.find(item => item.imageUrl);
        if (itemWithImage?.imageUrl) {
          setDynamicImage(itemWithImage.imageUrl);
        }
      }
      
      setImageLoading(false);
    } catch (err) {
      console.error("Error fetching overview data:", err);
      setImageLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle image load error
  const handleImageError = () => {
    setDynamicImage(null);
  };

  // Determine which image to display
  const displayImage = dynamicImage || awardImage;

  return (
    <section className="w-full bg-gradient-to-br from-[#0B0C2A] via-[#151530] to-[#1a1a3a] text-white py-20 px-4 sm:px-8 md:px-12 font-sans relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-3xl font-semibold tracking-wider uppercase">
              Company Overview
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {overviewData.map((item, index) => (
                <div 
                  key={item._id} 
                  className={`group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl`}
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-start gap-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 flex items-center justify-center rounded-2xl border-2 ${iconBorders[index % iconBorders.length]} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        {icons[index % icons.length]}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight">
                        {item.text}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
                {imageLoading ? (
                  // Loading skeleton
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl animate-pulse flex items-center justify-center">
                    <div className="text-gray-400 text-sm sm:text-base">Loading...</div>
                  </div>
                ) : (
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={displayImage}
                      alt="Overview"
                      onError={handleImageError}
                      className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                
                {/* Dynamic indicator */}
                {dynamicImage && (
                  <div className="absolute top-4 left-4 bg-green-500/90 text-white px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm border border-green-400/30">
                    Live
                  </div>
                )}
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-500/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-500/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500/50 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-20 flex justify-center space-x-8 opacity-60">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Overview;