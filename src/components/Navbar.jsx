import React, { useState } from "react";
import { FaCoins, FaRegMoon } from "react-icons/fa";
import { FiSun, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);

  function addToggler() {
    document.documentElement.classList.toggle("dark");
    setTheme((v) => !v);
  }
  return (
    <>
      {/* <p className="max-w-6xl m-auto text-center text-sm md:text-right mb-5">
        API Powered By{" "}
        <a
          className="text-blue-400"
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noreferrer"
        >
          CoinGecko
        </a>
      </p> */}
      <div className="max-w-6xl m-auto flex justify-between items-center  px-7 py-4">
        <Link to="/">
          <FaCoins className="text-3xl text-blue-700" />
        </Link>
        <h1 className="font-bold dark:white">
          CRYPTO <span className="text-blue-700">CURRENCY</span>
        </h1>
        <div className="flex items-center">
          {/* <button
          className="bg-transparent border-0 outline-none text-black dark:text-[#f4f4f4] cursor-pointer text-2xl px-3 py-1"
          
        >
          
        </button> */}
          <div className="relative">
            <FiMenu
              className="cursor-pointer"
              size={30}
              onClick={() => setMenu((a) => !a)}
            />
            <ul
              className={`absolute text-white shadow-md shadow-[#27262b] top-8 right-5 z-10 bg-blue-600 rounded-md  ${
                menu ? "block" : "hidden"
              }`}
            >
              <li
                title="Change Theme"
                className="px-8 py-2 flex justify-center hover:bg-blue-500  min-w-full cursor-pointer rounded-md"
                onClick={() => {
                  addToggler();
                  setMenu((a) => !a);
                }}
              >
                {theme ? <FiSun size={22} /> : <FaRegMoon size={22} />}
              </li>
              <Link to="/" onClick={() => setMenu((a) => !a)}>
                <li className="px-8 py-2 hover:bg-blue-500  min-w-full cursor-pointer rounded-md">
                  TRENDING
                </li>
              </Link>
              <Link to="/coins" onClick={() => setMenu((a) => !a)}>
                <li className="px-8 py-2 hover:bg-blue-500  min-w-full cursor-pointer rounded-md">
                  COINS
                </li>
              </Link>
              <Link to="/exchanges" onClick={() => setMenu((a) => !a)}>
                <li className="px-8 py-2 hover:bg-blue-500  min-w-full cursor-pointer rounded-md">
                  EXCHNAGES
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
