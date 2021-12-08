import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState("");
  const [dailyBtn, setDailybtn] = useState("white");
  const [weeklyBtn, setWeeklybtn] = useState("");
  const [monthlyBtn, setMonthlybtn] = useState("");

  // Sends requets to get data from file
  const getData = async () => {
    const res = await axios.get("/time-tracking-dashboard/data.json");
    setData(res.data);
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

  const reset = () => {
    setTimeframe("");
    setDailybtn("");
    setWeeklybtn("");
    setMonthlybtn("");
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="App container flex">
      <h1 className="sr-only">Time tracking dashboard</h1>
      <Profile
        daily={daily}
        weekly={weekly}
        monthly={monthly}
        dailyBtn={dailyBtn}
        weeklyBtn={weeklyBtn}
        monthlyBtn={monthlyBtn}
      />
      {data.map((data) => (
        <Card
          key={data.id}
          data={data}
          resetGenTime={reset}
          genTime={timeframe}
        />
      ))}
    </main>
  );
}

export default App;
