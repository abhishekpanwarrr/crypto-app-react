import React, { useState } from "react";
import { FaCoins, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState(true);
  function addToggler() {
    document.documentElement.classList.toggle("dark");
    setTheme((v) => !v);
  }
  return (
    <div className="max-w-6xl m-auto flex justify-between items-center  px-7 py-4">
      <Link to="/">
        <FaCoins className="text-3xl text-blue-700" />
      </Link>
      <h1 className="font-bold dark:white">
        CRYPTO <span className="text-blue-700">CURRENCY</span>
      </h1>
      <button
        className="bg-transparent border-0 outline-none text-black dark:text-white cursor-pointer text-2xl px-3 py-1"
        onClick={addToggler}
      >
        {theme ? <FiSun /> : <FaRegMoon />}
      </button>
    </div>
  );
};

export default Navbar;
