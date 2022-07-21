import React from "react";
const CoinItem = (props) => {
  return (
    <div className="flex justify-between items-center  dark:bg-[#252930] shadow-md rounded-md my-8 mx-4 py-3 px-4 hover:scale-105 transition-all duration-300 dark:shadow-zinc-700">
      <p>{props.coins.market_cap_rank}</p>
      <div className="flex items-center">
        <img
          src={props.coins.image}
          alt="AAAA"
          loading="lazy"
          className="h-10 mr-2 w-auto"
        />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>$ {props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)} %</p>
      <p className="hidden md:block">
        $ {props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hidden md:block">
        $ {props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
