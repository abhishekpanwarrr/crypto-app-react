import React from "react";
import CoinItem from "./CoinItem";
// import "./Coins.css";
import { Link } from "react-router-dom";
const Coins = (props) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center shadow-md rounded-md my-8 mx-4 py-3 px-4 font-bold">
        <p>#</p>
        <p className="-ml-16">Coin</p>
        <p>Price</p>
        <p>24H</p>
        <p className="hidden md:block">Volume</p>
        <p className="hidden md:block">Mkt Cap</p>
      </div>
      {props.coins.map((coins, index) => {
        return (
          <Link to={`/coin/${coins.id}`} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
