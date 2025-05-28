import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getLatestLogo } from "../api/landingpage-api"; // Adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');

  const fetchData = async () => {
    try {
      const res = await getLatestLogo();
      if (res?.data?.imageUrl) {
        setLogoUrl(res.data.imageUrl); // ✅ Save the logo URL
      }
    } catch (err) {
      console.error("Error fetching logo:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navItems = [
    { label: 'Products', path: '/products' },
    { label: 'Ecosystem', path: '/ecosystem' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Tokenomics', path: '/tokenomics' },
    { label: 'Events', path: '/events' },
    { label: 'Faq', path: '/faq' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Xiocoin Backchain', path: '/xiocoin-backchain' },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center w-full md:px-5 px-3 py-2 bg-black/30 shadow-md relative">
      
      {/* Dynamic Logo */}
      <div className="flex items-center gap-2">
        {logoUrl && (
          <img
            src={logoUrl}
            alt="RX Coin"
            className="h-10 md:h-12"
          />
        )}
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex gap-8 text-xs text-gray-300 font2">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path} className="hover:text-white transition duration-300">
            {item.label}
          </Link>
        ))}
      </div>

  

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden block">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white" aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X size={26} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white p-4 flex flex-col gap-3 lg:hidden z-50 font2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Buttons */}
       
        </div>
      )}
    </div>
  );
};

export default Navbar;
