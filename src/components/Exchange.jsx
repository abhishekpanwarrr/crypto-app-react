import React from "react";

const Exchange = ({ exchange, index }) => {
  return (
    <div className="flex justify-between items-center  dark:bg-[#252930] shadow-md rounded-md my-8 mx-4 py-3 px-4 hover:scale-105 transition-all duration-300 dark:shadow-zinc-700">
      <p>{index + 1}</p>
      <div className="flex items-center">
        <img
          src={exchange.image}
          alt="AAAA"
          loading="lazy"
          className="h-10 mr-2 w-auto"
        />
        <p>{exchange.name}</p>
      </div>
      <p>${exchange.trade_volume_24h_btc.toLocaleString()}</p>
      <p className="hidden md:block">{exchange.trust_score}</p>
      <p className="hidden md:block">{exchange.trust_score_rank}</p>
    </div>
  );
};

export default Exchange;
