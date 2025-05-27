import React from 'react';

const PlatformSection = () => {
  return (
    <section className="font1 px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 bg-transparent text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
   <div className="flex flex-col items-center text-center gap-4 mb-6 text-base sm:text-lg text-gray-400">
  <div className="flex text-4xl  items-center gap-4">
    <span className="font-semibold text-white">01</span>
    <div className="h-px w-12 bg-gray-600" />
    <span>Platform</span>
  </div>

  {/* Title */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
    The Cryptox <br className="hidden sm:block" /> Decentralized Network
  </h2>
</div>


        {/* Paragraphs */}
        <div className="space-y-6 text-gray-300 text-2xl sm:text-lg md:text-2xl leading-relaxed">
          <p>
            The release of our token is based on the Ethereum platform, ensuring it meets all modern blockchain
            standards for security, transparency, and functionality. By leveraging Ethereum’s robust infrastructure,
            our token offers seamless compatibility and high performance. Once launched, the token will be available
            for trading on multiple cryptocurrency exchanges, providing investors with easy access and liquidity.
          </p>

          <p>
            Thanks to its adherence to the latest Ethereum standards, our token can be effortlessly integrated into
            a wide range of third-party services, wallets, and decentralized applications (dApps). This flexibility
            not only broadens its use cases but also enhances its appeal to businesses and developers seeking secure,
            scalable blockchain solutions. Our commitment to quality and innovation ensures that the token will play
            a vital role in the evolving digital economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
