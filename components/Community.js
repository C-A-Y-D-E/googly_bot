import React from "react";

const Community = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1280px] w-full px-6 py-16 lg:py-24">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
          <img src="/community.png" />
          <div>
            <h2>
              Connecting thousands <br /> through our Ecosystem
            </h2>
            <p className="max-w-[550px] w-full mt-6 text-gray-100">
              Join a community of thousands that are using and building on the
              revolutionary gasless ecosystem
            </p>
            <a
              target="_blank"
              href="https://t.me/spicybscgroup"
              className="py-2 px-6 bg-red-800 rounded-lg mt-6 inline-block capitalize font-semibold"
            >
              join now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
