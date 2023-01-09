import React from "react";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Tokenomics = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/to.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      id="tokenomics"
      className="relative"
    >
      {/* <img
        src="/to.jpg"
        className="absolute inset-0 h-full w-full z-[-1] object-cover"
      /> */}
      <div className="container mx-auto px-6 py-16 lg:py-24 max-w-[1280px] w-full">
        <h2 className="text-center mb-16">Tokenomics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center  mx-auto mb-16">
          <div className="flex flex-col justify-self-center text-center mx-auto ">
            <span className="text-xl">Token Name</span>
            <span className="text-lg md:text-2xl font-semibold">
              GooGLy Bot{" "}
            </span>
          </div>
          <div className="flex flex-col justify-self-center text-center mx-auto">
            <span className="text-xl">Token Symbol</span>
            <span className="text-lg md:text-2xl font-semibold">$GB</span>
          </div>
          <div className="flex flex-col justify-self-center text-center mx-auto">
            <span className="text-xl">Total Supply</span>
            <span className="text-lg md:text-2xl font-semibold">
              100Million
            </span>
          </div>
          <div className="flex flex-col justify-self-center text-center mx-auto">
            <span className="text-xl">Token Contract</span>
            <span className="text-lg md:text-2xl font-semibold">
              Coming Soon
            </span>
            {/* <div className="flex gap-2 items-center">
              <span className="text-lg md:text-2xl font-semibold">
                0xa09....4e592
              </span>
              <CopyToClipboard
                text="0xa0944dBAB172f1DD41e76D28929912Dff634e592"
                onCopy={() => alert("Contract Copied")}
              >
                <FaCopy />
              </CopyToClipboard>
            </div> */}
          </div>
        </div>
        <img src="/tokenomics.svg" className="max-w-[500px] w-full mx-auto" />
      </div>
    </section>
  );
};

export default Tokenomics;
