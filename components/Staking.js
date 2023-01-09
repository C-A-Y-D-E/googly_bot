import React from "react";

const Staking = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1280px] w-full px-6 py-16">
        <div className="flex flex-wrap-reverse lg:flex-nowrap  justify-between gap-8">
          <img src="/staking-big.svg" />
          <div>
            <h2>Delegated Staking</h2>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              Allow users to delegate their staking power to other users or
              validators in order to earn rewards and also allow users to pool
              their staking power together in order to increase their rewards.
            </p>

            <a
              target="_blank"
              href="https://t.me/spicybscgroup"
              className="py-2 px-6 bg-red-800 rounded-lg mt-6 inline-block capitalize font-semibold"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;
