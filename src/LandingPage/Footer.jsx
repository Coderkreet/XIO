import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from '../../src/userAssets/logo.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0D0D0D] pt-12 px-4 sm:px-8 md:px-12 lg:px-20 font1 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo and Socials */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <img src={logo} alt="RX Coin" className="h-10" />
                        <span className="text-3xl font-bold text-white">RX Coin</span>
                    </div>
                    <p className="text-base text-gray-400 mb-4">
                        ICO & Cryptocurrency platform to buy and sell shares
                    </p>
                    <div className="flex space-x-4 text-gray-400 text-2xl">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaTelegramPlane />
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-3xl font-semibold mb-2">Get in touch</h3>
                    <p className="text-base text-gray-400">+44 7628562</p>
                    <p className="text-base text-gray-400">rx@gmail.com</p>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-3xl font-semibold mb-2">Subscribe</h3>
                    <p className="text-base text-gray-400 mb-4">
                        Sign up to receive the latest news about RX platform
                    </p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-b border-gray-600 text-base text-white w-full pr-10 py-1 focus:outline-none"
                        />
                        <button className="absolute right-0 top-1 text-purple-500 hover:text-white transition-all">
                            <IoIosArrowRoundForward size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-base text-gray-500 gap-3">
                <p>&copy; 2025 RX Coin</p>
                <p>rxcoin.com</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
