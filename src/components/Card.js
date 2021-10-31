import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./card.css";
import ellipsis from "../assets/icon-ellipsis.svg";

const Card = ({ data }) => {
  const [time, setTime] = useState("weekly");
  let info;

  const timeframe = () => {
    if (time === "daily") {
      setTime("weekly");
    } else if (time === "weekly") {
      setTime("monthly");
    } else if (time === "monthly") {
      setTime("daily");
    }
  };

  if (time === "daily") {
    info = (
      <div className="times grid">
        <p className="text-left fs-600 fw-300 current">
          {data.timeframes.daily.current}hrs
        </p>
        <p className="text-light fs-200 text-right previous">
          Last - {data.timeframes.daily.previous}hrs
        </p>
      </div>
    );
  } else if (time === "weekly") {
    info = (
      <div className="times grid">
        <p className="text-left fs-600 fw-300 current">
          {data.timeframes.weekly.current}hrs
        </p>
        <p className="text-light fs-200 text-right previous">
          Last - {data.timeframes.weekly.previous}hrs
        </p>
      </div>
    );
  } else {
    info = (
      <div className="times grid">
        <p className="text-left fs-600 fw-300 current">
          {data.timeframes.monthly.current}hrs
        </p>
        <p className="text-light fs-200 text-right previous">
          Last - {data.timeframes.monthly.previous}hrs
        </p>
      </div>
    );
  }

  return (
    <div className="card flex">
      <div className="card-info grid">
        <p className="fw-500 text-left title">{data.title}</p>
        <button className="btn btn-size" onClick={() => timeframe()}>
          <img src={ellipsis} alt="change timeframe" className="link" />
        </button>
        {info}
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
