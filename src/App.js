import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState("daily");
  const [dailyBtn, setDailybtn] = useState("white");
  const [weeklyBtn, setWeeklybtn] = useState();
  const [monthlyBtn, setMonthlybtn] = useState();

  const getData = () => {
    axios.get("data.json").then(function (response) {
      setData(
        response.data.map((data) => {
          return {
            id: data.id,
            title: data.title,
            timeframes: data.timeframes,
            background: data.background,
          };
        })
      );
    });
  };

  const daily = () => {
    setTimeframe("daily");
    setDailybtn("white");
    setWeeklybtn("");
    setMonthlybtn("");
  };

  const weekly = () => {
    setTimeframe("weekly");
    setDailybtn("");
    setWeeklybtn("white");
    setMonthlybtn("");
  };
  const monthly = () => {
    setTimeframe("monthly");
    setDailybtn("");
    setWeeklybtn("");
    setMonthlybtn("white");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App container flex">
      <Profile
        daily={daily}
        weekly={weekly}
        monthly={monthly}
        dailyBtn={dailyBtn}
        weeklyBtn={weeklyBtn}
        monthlyBtn={monthlyBtn}
      />
      {data.map((data) => (
        <Card key={data.id} data={data} time={timeframe} />
      ))}
    </div>
  );
}

export default App;
