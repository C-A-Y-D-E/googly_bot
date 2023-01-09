import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMailBulk,
  FaTelegramPlane,
  FaTwitter,
  FaReddit,
  FaMedium,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="py-8 ">
      <div className="max-w-[1200px] mx-auto container  px-8 relative z-10">
        <div className="flex justify-between gap-8 items-center flex-wrap">
          <div className=" text-sm text-[#D9DBE1]  ">
            © 2022-2023 Copyright All rights reserved
          </div>
          <a href="https://t.me/proprk" target="_blanks">
            Website by <span className="text-blue-700">Prk</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
