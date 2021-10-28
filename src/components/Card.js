import React, { useState, useEffect } from "react";
import "./card.css";

import ellipsis from "../assets/icon-ellipsis.svg";

const Card = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card flex">
      <div className="card-info grid">
        <p className="fw-500 text-left title">{props.title}</p>
        <img src={ellipsis} alt="change timeframe" className="link" />
        <p className="text-left fs-600 fw-300 current">{props.current}hrs</p>
        <p className="text-light fs-200 text-right previous">
          Last {props.timeframe} - {props.previous}
        </p>
      </div>
    </div>
  );
};

export default Card;
