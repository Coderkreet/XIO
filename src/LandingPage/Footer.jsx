import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../src/userAssets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full  text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 font1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Socials */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="RX Coin" className="h-12" />
          </div>
          <p className="text-2xl text-gray-400 mb-6 leading-relaxed">
            ICO & Cryptocurrency platform to buy and sell shares
          </p>
          <div className="flex space-x-5 text-gray-400 text-3xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTelegramPlane />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-4xl font-bold mb-4">Get in touch</h3>
          <p className="text-lg text-gray-400 mb-2">+44 7628562</p>
          <p className="text-lg text-gray-400">rx@gmail.com</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-4xl font-bold mb-4">Subscribe</h3>
          <p className="text-lg text-gray-400 mb-5">
            Sign up to receive the latest news about RX platform
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b-2 border-gray-500 text-lg text-white w-full pr-10 py-2 focus:outline-none"
            />
            <button className="absolute right-0 top-2 text-purple-500 hover:text-white transition-all">
              <IoIosArrowRoundForward size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-700 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-lg text-gray-500 gap-4">
        <p>&copy; 2025 RX Coin</p>
        <p>rxcoin.com</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
