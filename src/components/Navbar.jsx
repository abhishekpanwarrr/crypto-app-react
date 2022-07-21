import React from "react";
import { FaCoins, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ theme, setTheme }) => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          CRYPTO <span className="purple">CURRENCY</span>
        </h1>
        <button className="theme" onClick={() => setTheme((v) => !v)}>
          {theme ? <FiSun /> : <FaRegMoon />}
        </button>
      </div>
    </Link>
  );
};

export default Navbar;
