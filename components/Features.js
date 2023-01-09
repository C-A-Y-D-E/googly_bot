import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div className="container mx-auto px-6 pb-16 lg:pb-24 max-w-[1280px] w-full">
        <h2 className="text-center">What we provide users?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 mt-8 lg:mt-16"></div>
      </div>
    </section>
  );
};

export default Features;

const FeaturesItem = ({ icon, heading, desp }) => {
  return (
    <div className="p-8 bg-[#070707] rounded-2xl space-y-3 justify-self-center">
      <img src={`/${icon}.svg`} />
      <h3>{heading}</h3>
      <p>{desp}</p>
    </div>
  );
};
