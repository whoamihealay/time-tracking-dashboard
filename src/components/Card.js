import React, { useContext } from "react";
import "./card.css";
import ellipsis from "../assets/icon-ellipsis.svg";

const Card = ({ data: { title, current, timeframes, previous } }) => {
  return (
    <div className="card flex">
      <div className="card-info grid">
        <p className="fw-500 text-left title">{title}</p>
        <img src={ellipsis} alt="change timeframe" className="link" />
        <p className="text-left fs-600 fw-300 current">{current}hrs</p>
        <p className="text-light fs-200 text-right previous">
          Last {timeframes} - {previous}
        </p>
      </div>
    </div>
  );
};

export default Card;
