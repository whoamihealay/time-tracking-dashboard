import React, { useState } from "react";
import "./card.css";
import ellipsis from "../assets/icon-ellipsis.svg";

const Card = ({ data, resetGenTime, genTime }) => {
  const [time, setTime] = useState("daily");
  let info;

  // sets all cards to the same timeframe depending on the onClick button. The two conditions prevents Too many renders error.
  if (genTime !== "" && genTime !== time) {
    setTime(genTime);
  }

  // Returns each timeframe card info. To be refactored.
  if (time === "daily") {
    info = (
      <div className="times grid">
        <p className="text-left fs-600 fw-300 current">
          {data.timeframes.daily.current}hrs
        </p>
        <p className="text-light fs-200 text-right previous">
          Yesterday - {data.timeframes.daily.previous}hrs
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
          Last week - {data.timeframes.weekly.previous}hrs
        </p>
      </div>
    );
  } else if (time === "monthly") {
    info = (
      <div className="times grid">
        <p className="text-left fs-600 fw-300 current">
          {data.timeframes.monthly.current}hrs
        </p>
        <p className="text-light fs-200 text-right previous">
          Last month - {data.timeframes.monthly.previous}hrs
        </p>
      </div>
    );
  } else {
    info = <div></div>;
  }

  const cardBtn = () => {
    resetGenTime();
    if (time === "daily") {
      setTime("weekly");
    } else if (time === "weekly") {
      setTime("monthly");
    } else if (time === "monthly") {
      setTime("daily");
    }
  };

  const cardStyle = {
    backgroundImage: `url(${data.background.icon})`,
    backgroundColor: `${data.background.color}`,
  };

  return (
    <>
      <div className="card flex" style={cardStyle}>
        <div className="card-info grid">
          <p className="fw-500 text-left title">{data.title}</p>
          <button className="btn btn-size" onClick={cardBtn}>
            <img src={ellipsis} alt="change timeframe" className="link" />
          </button>
          {info}
        </div>
      </div>
    </>
  );
};

export default Card;
