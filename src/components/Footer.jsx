import React from "react";
import coingeck from "../assets/coingecko.svg";
const Footer = () => {
  return (
    <div className="max-w-6xl m-auto flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center  px-7 py-4">
      <h3>
        Copyright &#169;{" "}
        <a
          href="https://abhishekpanwar.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700"
        >
          Abhishek Panwar
        </a>
      </h3>
      <div className="flex items-center justify-center space-x-2">
        <p> API Powered By</p>{" "}
        <a
          className="text-blue-400"
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img src={coingeck} alt="Powered" className="h-10" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
