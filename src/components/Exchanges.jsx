import React, { useState, useEffect } from "react";
import axios from "axios";
import { EXCHANGE_API_KEY } from "../assets/api_keys";
import Exchange from "./Exchange";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios
      .get(EXCHANGE_API_KEY)
      .then((response) => {
        console.log(response.data);
        setExchanges(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="w-full text-center shadow-md dark:shadow-blue-700 text-2xl ml-4 rounded-md px-4 py-1 mt-5">
        EXCHANGES
      </h1>
      <div className="flex justify-between items-center shadow-md rounded-md my-8 mx-4 py-3 px-4 font-bold">
        <p>#</p>
        <p className="ml-16">EXCHANGE</p>
        <p>24H TRADE VOLUME</p>
        <p className="hidden md:block">TRUST SCORE </p>
        <p className="hidden md:block">TRUST RANK</p>
      </div>
      {exchanges.map((exchange, index) => (
        <Exchange key={exchange.id} index={index} exchange={exchange} />
      ))}
    </div>
  );
};

export default Exchanges;
