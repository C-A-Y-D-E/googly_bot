import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const Team = () => {
  return (
    <section>
      <div className="container mx-auto px-6 pb-16 lg:py-24 max-w-[1280px] h-full relative z-10">
        <h2 className="mb-6 text-center"> Partners</h2>
        <Marquee gradientWidth={50} gradientColor={[0, 0, 0]}>
          <Partners logo="/partners/bsc.png" link="https://bscscan.com/" />

          <Partners logo="/partners/cmc.png" link="https://coinmarketcap.com" />
          <Partners logo="/partners/bsc.png" link="https://bscscan.com/" />

          <Partners logo="/partners/cmc.png" link="https://coinmarketcap.com" />
        </Marquee>

        <Marquee gradientWidth={50} gradientColor={[0, 0, 0]}>
          <Partners logo="/partners/cg.png" link="https://www.coingecko.com" />

          <Partners logo="/partners/avedex.png" link="https://ave.ai/" />
          <Partners logo="/partners/dex.png" link="" />

          <Partners logo="/partners/cg.png" link="https://www.coingecko.com" />

          <Partners logo="/partners/avedex.png" link="https://ave.ai/" />
          <Partners logo="/partners/dex.png" link="" />
          {/* <Partners logo="/partners/audit.png" link="" />
          <Partners logo="/partners/safu.png" link="" /> */}
        </Marquee>
      </div>
    </section>
  );
};

export default Team;

const Partners = ({ logo, link = "" }) => {
  return (
    <div className=" btn-gradient-2 p-6 lg:p-10 rounded-xl hover:scale-105 transition-all ">
      <Link href={link} target="_blank">
        <img src={logo} alt="bsc" className="max-w-[100px] md:max-w-[200px]" />
      </Link>
    </div>
  );
};
