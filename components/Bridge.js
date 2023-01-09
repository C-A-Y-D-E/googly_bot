import React from "react";

const Bridge = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1280px] w-full px-6 pb-16 ">
        <div className="flex flex-wrap lg:flex-nowrap  justify-between gap-8">
          <div>
            <h2>Cross-chain Bridge Protocols</h2>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              Enable users to move tokens between different blockchains without
              the need for a third-party intermediary.
            </p>

            <a
              target="_blank"
              href="https://t.me/spicybscgroup"
              className="py-2 px-6 bg-red-800 rounded-lg mt-6 inline-block capitalize font-semibold"
            >
              Coming Soon
            </a>
          </div>
          <img src="/bridge-bg.png" className="max-w-[500px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Bridge;
