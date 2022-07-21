import React from "react";

const TrendingItem = ({ trend, index }) => {
  return (
    <div className="flex justify-between items-center  dark:bg-[#252930] shadow-md rounded-md my-8 mx-4 py-3 px-4 hover:scale-105 transition-all duration-300 dark:shadow-zinc-700">
      <p>{index + 1}</p>
      <div className="flex items-center">
        <img
          src={trend.item.small}
          alt="AAAA"
          loading="lazy"
          className="h-10 mr-2 w-auto"
        />
        <p>{trend.item.name}</p>
      </div>
      <p>$ {trend.item.price_btc.toFixed(8)}</p>
      <p>{trend.item.symbol}</p>
      <p className="hidden md:block">{trend.item.score}</p>
      <p className="hidden md:block">{trend.item.market_cap_rank}</p>
    </div>
  );
};

export default TrendingItem;
