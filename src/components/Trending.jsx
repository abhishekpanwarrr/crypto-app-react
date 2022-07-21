import React, { useState, useEffect } from "react";
import { TRENDING_API_KEY } from "../assets/api_keys";
import axios from "axios";
import TrendingItem from "./TrendingItem";
const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(TRENDING_API_KEY)
      .then((response) => {
        setTrending(response.data.coins);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="w-full text-center shadow-md dark:shadow-blue-700 text-2xl ml-4 rounded-md px-4 py-1 mt-5">
        TRENDING COINS
      </h1>

      <div className="flex justify-between items-center shadow-md rounded-md my-8 mx-4 py-3 px-4 font-bold">
        <p>#</p>
        <p className="ml-16">COIN</p>
        <p>PRICE</p>
        <p>SYMBOL</p>
        <p className="hidden md:block">SCORE</p>
        <p className="hidden md:block">MKT CAP RANK</p>
      </div>
      {trending.map((trend, index) => {
        return <TrendingItem key={trend.id} trend={trend} index={index} />;
      })}
    </div>
  );
};

export default Trending;
