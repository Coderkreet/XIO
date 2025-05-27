import React from 'react';
import logo from '../../src/userAssets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticatedRoutes, AuthRoutes } from '../constants/Routes';




const Navbar = () => {

const navigate = useNavigate();

    return (
        <div className="flex flex-wrap justify-between  items-center w-full md:px-5 px-3 py-2 bg-black/30 shadow-md ">
            <div className="flex items-center gap-2">
                <img src={logo} alt="RX Coin" className=" h-24 md:h-24" />
            </div>
            <div className="hidden lg:flex gap-8 text-2xl text-gray-300 font2 ">
                {[
                    'Products',
                    'Ecosystem',
                    'Roadmap',
                    'Tokenomics',
                    'Events',
                    'Faq',
                    'Blogs',
                    'Mr Mint Backchain',
                ].map((item) => (
                    <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition duration-300">
                        {item}
                    </a>
                ))}
            </div>


            <div className="flex items-center gap-4 text-2xl md:text-sm font2">
                <button className="bg-gradient-to-r from-[#A863E2] to-[#2D005F]  text-white px-4 py-1.5 rounded-md  font-medium">
                    BUY MR MINT
                </button>
                <button onClick={()=>navigate(AuthRoutes.LOGIN)} className="text-white text-2xl  hover:text-gray-300">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
