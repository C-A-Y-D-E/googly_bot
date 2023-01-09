import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-8 lg:pt-0 lg:h-screen"
    >
      <div className="container mx-auto py-16 lg:py-24 max-w-[1280px] w-full px-6">
        <div className="flex flex-wrap-reverse lg:flex-nowrap gap-16 justify-between items-center">
          <div>
            <span className="uppercase text-blue-700 font-semibold">
              #search for anything, anytime!
            </span>
            <h1>
              Get the power of <br /> Google on Telegram{" "}
            </h1>
            <p className="max-w-[550px] w-full mt-4 lg:mt-6 text-gray-100">
              GooGly Bot is a convenient and efficient way to search for
              information on Telegram. With this bot, you can easily find what
              you're looking for without having to leave the Telegram app.
            </p>
            <div className="flex gap-4 items-center flex-wrap">
              <a
                href="https://www.pinksale.finance/launchpad/0x5C836268BF0123CaD1977f80b9762766d9AF9565?chain=BSC"
                target="_blank"
                className="py-2 px-6 bg-blue-700 rounded-lg mt-6 inline-block capitalize"
              >
                Buy Now
              </a>
              <a
                target="_blank"
                href="https://whitepaper.spicynetwork.io"
                className="py-2 px-6 border border-blue-700 rounded-lg mt-6 inline-block capitalize"
              >
                Chart
              </a>
            </div>
          </div>
          <img src="/hero.png" className="max-w-[450px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
