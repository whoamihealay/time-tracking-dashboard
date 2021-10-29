import React, { useContext } from "react";
import { ReactComponent as Work } from "./assets/icon-work.svg";

import "./App.css";
import Card from "./components/Card";
import Profile from "./components/Profile";
import CardContext from "./context/card/cardContext";

function App() {
  const cardContext = useContext(CardContext);

  const { loading, data } = cardContext;

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
