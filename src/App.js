import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("data.json").then(function (response) {
      setData(
        response.data.map((data) => {
          return {
            id: data.id,
            title: data.title,
            timeframes: data.timeframes,
          };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="App container flex">
      <Profile />
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
}

export default App;
