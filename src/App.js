import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./components/Coin";
import { COINS_API_KEY } from "./assets/api_keys";
import Exchanges from "./components/Exchanges";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(COINS_API_KEY)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="dark:bg-[#27262b] dark:text-[#f4f4f4]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/coins" element={<Coins coins={coins} />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
