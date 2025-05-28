import React, { useEffect, useState } from "react";
import coin from "../../src/userAssets/coins.png";
import btn from "../../src/userAssets/btn.png";
import shadow1 from "../../src/userAssets/shadow1.png";
import { getAllTokens } from "../api/landingpage-api"; // Adjust this path as needed

export default function ICOTokenSale() {
    const [tokenData, setTokenData] = useState(null);

    useEffect(() => {
        const fetchTokenData = async () => {
            try {
                const response = await getAllTokens();
                if (response?.data && Array.isArray(response.data) && response.data.length > 0) {
                    setTokenData(response.data[0]); // Use the first token object
                }
            } catch (error) {
                console.error("Error fetching token data:", error);
            }
        };

        fetchTokenData();
    }, []);

    if (!tokenData) {
        return <div className="text-white text-center py-10">Loading token details...</div>;
    }

    return (
        <section className="md:px-10 px-4 py-10 font1">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-12">
                    {/* Left Side */}
                    <div className="flex flex-col gap-5 items-center text-center lg:w-1/3">
                        <h1 className="bg-gradient-to-r from-[#5E2FF4] via-[#C570FB] to-[#5E2FF4] bg-clip-text text-transparent uppercase font-bold text-3xl">
                            ICO {tokenData.name} Token
                        </h1>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            ICO Tokens<br />Details and Sale
                        </h2>
                        <img src={coin} alt="Coin" />
                    </div>

                    {/* Right Side */}
                    <div className="lg:w-2/3 w-full space-y-8">
                        {/* Token Info Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            {[
                                `Token Name: ${tokenData.name}`,
                                `Ticker: ${tokenData.ticker}`,
                                `Chain: ${tokenData.chain}`
                            ].map((label, index) => (
                                <button
                                    key={index}
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

                        {/* Token Description */}
                        <p className="text-text_color text-2xl font-semibold max-w-2xl mx-auto text-center">
                            {tokenData.description}
                        </p>

                        {/* Token Sale Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
                            <InfoCard label="Sale Start" value={new Date(tokenData.saleStart).toUTCString()} />
                            <InfoCard label="Sale End" value={new Date(tokenData.saleEnd).toUTCString()} />
                            <InfoCard label="Tokens for Sale" value={tokenData.tokensForSale.toLocaleString()} />
                            <InfoCard label="Exchange Rate" value={tokenData.exchangeRate} />
                            <InfoCard label="Minimum Transaction" value={tokenData.minTransaction} />
                            <InfoCard label="Accepted Currencies" value={tokenData.acceptedCurrencies.join(', ')} />
                        </div>
                    </div>
                </div>

                {/* Background Shadow */}
                <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none">
                    <img src={shadow1} className="w-full h-full" alt="shadow" />
                </div>
            </div>
        </section>
    );
}

// Reusable Info Card Component
function InfoCard({ label, value }) {
    return (
        <div className="bg-[#1A1730] border border-[#2E2B50] p-4 rounded-2xl relative">
            <h4 className="text-sm text-gray-400 mb-1">{label}</h4>
            <p className="text-base text-white font-medium">{value}</p>
        </div>
    );
}
