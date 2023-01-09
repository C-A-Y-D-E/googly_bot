import React from "react";

const Team = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1280px] w-full px-6 py-16 lg:py-24">
        <div className="text-white">
          <h2 className="text-center">Teams That Delivers</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
          <div className="text-white flex items-center justify-center flex-col gap-4">
            <img src="/team/Erick.svg" />
            <div className="text-center">
              <h2>Erick</h2>
              <div>CEO</div>
            </div>
          </div>
          <div className="text-white flex items-center justify-center flex-col gap-4">
            <img src="/team/Mark.svg" />

            <div className="text-center">
              <h2>Mark</h2>
              <div>Marketing</div>
            </div>
          </div>
          <div className="text-white flex items-center justify-center flex-col gap-4">
            <img src="/team/Hansel.svg" />
            <div className="text-center">
              <h2>Hansel</h2>
              <div>Developer</div>
            </div>
          </div>
          <div className="text-white flex items-center justify-center flex-col gap-4">
            <img src="/team/Ruby.svg" />

            <div className="text-center">
              <h2>Ruby</h2>
              <div>Community Handler</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
