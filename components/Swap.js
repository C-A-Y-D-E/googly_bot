import React from "react";

const Swap = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1280px] w-full px-6 pt-16">
        <div className="flex flex-wrap lg:flex-nowrap  justify-between">
          <div>
            <h2>
              Atomic Swap & <br /> Cross-chain Swaps
            </h2>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              <b>Atomic Swap</b>: Allow users to exchange tokens without the
              need for a third-party intermediary.
            </p>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              <b>Cross-chain Swaps</b>: Enable users to swap tokens between
              different blockchains.
            </p>
            <a
              target="_blank"
              href="https://t.me/spicybscgroup"
              className="py-2 px-6 bg-red-800 rounded-lg mt-6 inline-block capitalize font-semibold"
            >
              Launch App
            </a>
          </div>
          <img src="/swap-big.svg" />
        </div>
      </div>
    </section>
  );
};

export default Swap;
