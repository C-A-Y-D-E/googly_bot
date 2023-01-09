import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      style={{ zIndex: 9999 }}
      className="fixed left-0 right-0 top-0 flex flex-wrap items-center justify-between px-2 py-4 backdrop-blur-2xl mb-3"
    >
      <div className="container max-w-[1200px] px-6 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/" className="flex gap-4 items-center">
            <img src="/logo.svg" className="w-24 lg:w-32" />
          </Link>
          <button
            className="text-white cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center mt-4 lg:mt-0 " +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col gap-6 lg:flex-row  h-full list-none lg:ml-auto">
            <li className="flex gap-2 items-center cursor-pointer">
              <a href="#home">Home</a>
            </li>

            <li className="flex gap-2 items-center cursor-pointer">
              <a href="#tokenomics">Tokenomics</a>
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="hover:text-accent flex gap-2 items-center cursor-pointer">
              <a href="#" className="flex items-center gap-2">
                <img src="/telegram.png" className="w-6" />{" "}
                <span>Telegram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
