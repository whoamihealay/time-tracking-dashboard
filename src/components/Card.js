import React from "react";
// import PropTypes from "prop-types";
import "./card.css";
import ellipsis from "../assets/icon-ellipsis.svg";

const Card = ({ data }) => {
  return (
    <div className="card flex">
      <div className="card-info grid">
        <p className="fw-500 text-left title">{data.title}</p>
        <img src={ellipsis} alt="change timeframe" className="link" />
        <p className="text-left fs-600 fw-300 current">
          {data.timeframes.weekly.current}hrs
        </p>
        <p className="text-light fs-200 text-right previous">
          Last - {data.timeframes.weekly.previous}hrs
        </p>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   data: PropTypes.object.isRequired,
// };

export default Card;
