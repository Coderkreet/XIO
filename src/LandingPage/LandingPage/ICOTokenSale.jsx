import React from "react";
import coin from "../../src/userAssets/coins.png";
import btn from '../../src/userAssets/btn.png';
import shadow1 from "../../src/userAssets/shadow1.png";

const saleDetails = [
    {
        label: "Start",
        value: "June 1, 2025 (00:00 GMT)"
    },
    {
        label: "End",
        value: "June 30, 2025 (00:00 GMT)"
    },
    {
        label: "Number of Tokens for Sale",
        value: "1,000,000 Tokens"
    },
    {
        label: "Tokens exchange rate",
        value: "1 ETH = 400 XIO | 1 BNB = 150 XIO"
    },
    {
        label: "Minimal Transaction",
        value: "0.1 ETH / 0.1 BNB"
    },
    {
        label: "Acceptable currencies",
        value: "ETH, BNB, etc."
    }
];

export default function ICOTokenSale() {
    return (
        <section className="md:px-10 px-4 py-10 font1">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-12">
                    <div className="flex flex-col gap-5 items-center text-center lg:w-1/3">
                        <h1 className="bg-gradient-to-r from-[#5E2FF4] via-[#C570FB] to-[#5E2FF4] bg-clip-text text-transparent uppercase font-bold text-3xl">
                            ICO Coindox Token
                        </h1>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            ICO Tokens<br />Details and Sale
                        </h2>
                        <img src={coin} alt="Coin" />
                    </div>

                    <div className="lg:w-2/3 w-full space-y-8">
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            {["Token Name: XIO", "Ticker: XIO", "Chain: BNB"].map((label, i) => (
                                <button
                                    key={i}
                                    className="px-10 py-2 border border-white/40 font2 rounded-md font-semibold"
                                    style={{
                                        backgroundImage: `url(${btn})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        <p className="text-text_color text-2xl font-semibold max-w-2xl mx-auto text-center">
                            Our token distribution ensures a robust ecosystem, enabling us to enhance pre-sale sales, marketing, liquidity staking, and support for research and development, all aimed at fostering sustainable growth and community engagement.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
                            {saleDetails.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1A1730] border border-[#2E2B50] p-4 rounded-2xl relative"
                                >
                                    <h4 className="text-sm text-gray-400 mb-1">{item.label}</h4>
                                    <p className="text-base text-white font-medium">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none">
                    <img src={shadow1} className="w-full h-full" alt="" />
                </div>
            </div>
        </section>
    );
}
