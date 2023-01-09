import React from "react";

const MarketPlace = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1280px] w-full px-6 py-16">
        <div className="flex flex-wrap-reverse lg:flex-nowrap  justify-between gap-8">
          <img src="/marketplace.svg" className="max-w-[600px] w-full" />
          <div>
            <h2>NFT Marketplace</h2>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              <b>Open Marketplace</b>: Allow users to buy and sell NFTs on an
              open marketplace with transparent pricing and liquidity.
            </p>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              <b>Auction House</b>: Allow users to bid on NFTs in an auction
              format, with the highest bidder winning the auction.
            </p>

            <a
              target="_blank"
              href="https://t.me/spicybscgroup"
              className="py-2 px-6 bg-red-800 rounded-lg mt-6 inline-block capitalize font-semibold"
            >
              Coming Soon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
