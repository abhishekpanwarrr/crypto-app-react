import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";
import DOMPurify from "dompurify";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((err) => console.error(err));
  }, [url]);
  return (
    <div className="max-w-6xl my-4 mx-auto flex flex-col bg-[#26272b] shadow-lg rounded-md">
      <div className="max-w-6xl my-4 mx-auto flex flex-col bg-[#26272b] shadow-lg rounded-md">
        <h1 className="text-2xl border-b-2 border-blue-300">{coin.name}</h1>
      </div>
      <div className="w-full px-4 my-4 mx-auto flex flex-col bg-[#26272b] shadow-lg rounded-md">
        <div className="m-2 md:my-2 md:mx-0 px-4">
          <span className="border-1 border-solid shadow-lg bg-[#6900ff] rounded-md px-4 py-2 cursor-grabbing">
            Rank # {coin.market_cap_rank}
          </span>
        </div>
        <div className="grid grid-flow-col grid-cols-2">
          <div className="flex items-center my-4 mx-0">
            {coin.image ? <img src={coin.image.small} alt="" /> : null}
            <p className="pr-4">{coin.name}</p>
            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
          </div>
          <div className="flex items-center justify-center">
            {coin.market_data?.current_price ? (
              <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
            ) : null}
          </div>
        </div>
      </div>

      <div className="w-full px-4 my-4 mx-auto flex flex-col bg-[#26272b] shadow-lg rounded-md">
        <table className="my-2 mx-0">
          <thead>
            <tr>
              <th className="py-2 px-2 text-center bg-[#333]">1h</th>
              <th className="py-2 px-2 text-center bg-[#333]">24h</th>
              <th className="py-2 px-2 text-center bg-[#333]">7d</th>
              <th className="py-2 px-2 text-center bg-[#333]">14d</th>
              <th className="py-2 px-2 text-center bg-[#333]">30d</th>
              <th className="py-2 px-2 text-center bg-[#333]">1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-2 text-center">
                {coin.market_data?.price_change_percentage_1h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="py-2 px-2 text-center">
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="py-2 px-2 text-center">
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="py-2 px-2 text-center">
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="py-2 px-2 text-center">
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td className="py-2 px-2 text-center">
                {coin.market_data?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full  my-4 mx-auto flex flex-col bg-[#26272b] shadow-lg rounded-md px-4 py-2">
        <div className="grid grid-flow-col grid-cols-2 gap-8 w-[100%]">
          <div className="left">
            <div className="flex justify-between border-b border-solid border-[#808080]">
              <h4>24 Hour Low</h4>
              {coin.market_data?.low_24h ? (
                <p className="text=[#d3d3d3]">
                  ${coin.market_data.low_24h.usd.toLocaleString()}
                </p>
              ) : null}
            </div>
            <div className="flex justify-between border-b border-solid border-[#808080]">
              <h4>24 Hour High</h4>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}{" "}
            </div>
          </div>
          <div className="right">
            <div className="flex justify-between border-b border-solid border-[#808080]">
              <h4>Market Cap</h4>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="flex justify-between border-b border-solid border-[#808080]">
              <h4>Circulating Supply</h4>
              {coin.market_data ? (
                <p>{coin.market_data.circulating_supply}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4 mx-auto flex flex-col bg-[#26272b] shadow-lg rounded-md px-4 py-2">
        <div className="about">
          <h3 className="my-4 mx-0">About</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
