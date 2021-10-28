import React from "react";
import { ReactComponent as Work } from "./assets/icon-work.svg";

import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App container flex">
      <Profile />
      <Card
        icon={<Work />}
        title="Work"
        timeframe="daily"
        current="5"
        previous="7"
      />
      <Card
        icon={<Work />}
        title="Work"
        timeframe="daily"
        current="5"
        previous="7"
      />
      <Card
        icon={<Work />}
        title="Work"
        timeframe="daily"
        current="5"
        previous="7"
      />
      <Card
        icon={<Work />}
        title="Work"
        timeframe="daily"
        current="5"
        previous="7"
      />
      <Card
        icon={<Work />}
        title="Work"
        timeframe="daily"
        current="5"
        previous="7"
      />
      <Card
        icon={<Work />}
        title="Work"
        timeframe="daily"
        current="5"
        previous="7"
      />
    </div>
  );
}

export default App;
