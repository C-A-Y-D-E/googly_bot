import React from "react";
import { motion } from "framer-motion";
const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="max-w-[1600px] mx-auto"
      style={{
        backgroundImage: 'url("/token-bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div>
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "backInOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            Whats next?
          </motion.h2>
        </div>

        <div className="">
          <img
            src="/roadmap.svg"
            className="w-[800px] mx-auto hidden sm:block"
          />
          <img src="/roadmap-mob.svg" className=" mx-auto block sm:hidden" />
        </div>
        {/* <div className="grid grid-cols-1 md:justify-items-center  md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-0  mt-16">
          <RoadmapItem title="Mild Q4 2022" r1={r1} />
          <RoadmapItem title="Medium Q4 2022" r1={r2} />
          <RoadmapItem title="Hot Q1 2023" r1={r3} />
          <RoadmapItem title="Spicy Q2 2023" r1={r3} />
        </div> */}
      </div>
    </div>
  );
};

export default Roadmap;
const RoadmapItem = ({ r1, title }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "backInOut" }}
      viewport={{ once: true }}
      className=""
    >
      <div className="ml-6 text-3xl">{title}</div>
      <ul className="">
        {r1.map((r) => (
          <li className="flex gap-2 items-center  p-4">
            <img src={`/icons/${r.icon}.svg`} />{" "}
            <span className="text-gray-400">{r.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
