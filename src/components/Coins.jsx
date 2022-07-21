import React from "react";
import CoinItem from "./CoinItem";
// import "./Coins.css";
import { Link } from "react-router-dom";
const Coins = (props) => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="w-full text-center shadow-md dark:shadow-blue-700 text-2xl ml-4 rounded-md px-4 py-1 mt-5">
        COINS
      </h1>

      <div className="flex justify-between items-center shadow-md rounded-md my-8 mx-4 py-3 px-4 font-bold">
        <p>#</p>
        <p className="-ml-16">COIN</p>
        <p>PRICE</p>
        <p>24H</p>
        <p className="hidden md:block">VOLUME</p>
        <p className="hidden md:block">MKT CAP</p>
      </div>
      {props.coins.map((coins, index) => {
        return (
          <Link
            to={`/coin/${coins.id}`}
            key={coins.id}
            title={`More about ${coins.name}`}
          >
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
