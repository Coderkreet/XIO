import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getLatestLogo } from "../api/landingpage-api";

const Footer = () => {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLatestLogo();
        if (res?.data?.imageUrl) {
          setLogoUrl(res.data.imageUrl);
        }
      } catch (err) {
        console.error("Error fetching logo:", err);
      }
    };

    fetchData();
  }, []);

  const socialIcons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaTelegramPlane />, href: "#" },
  ];

  return (
    <footer className="w-full text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font1 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Logo and Socials */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {logoUrl && <img src={logoUrl} alt="RX Coin" className="h-12 w-12" />}
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
            ICO & Cryptocurrency platform to buy and sell shares
          </p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-2xl">
            {socialIcons.map((item, i) => (
              <a key={i} href={item.href} className="hover:text-white transition">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Get in touch</h3>
          <p className="text-base sm:text-lg text-gray-400 mb-2">+44 7628562</p>
          <p className="text-base sm:text-lg text-gray-400">rx@gmail.com</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Subscribe</h3>
          <p className="text-base sm:text-lg text-gray-400 mb-5">
            Sign up to receive the latest news about RX platform
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b-2 border-gray-500 text-white text-sm sm:text-base w-full pr-12 py-2 focus:outline-none"
            />
            <button className="absolute right-0 top-1 sm:top-2 text-purple-500 hover:text-white transition-all">
              <IoIosArrowRoundForward size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base text-gray-500 gap-4">
        <p>&copy; 2025 RX Coin</p>
        <p>rxcoin.com</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
