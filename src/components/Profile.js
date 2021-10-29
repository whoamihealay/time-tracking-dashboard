import React, { useState } from "react";
import jeremy from "../assets/image-jeremy.png";
import "./profile.css";

const Profile = () => {
  const [day, setDay] = useState("daily");
  return (
    <div className="profile flex bg-dark">
      <div className="profile-upper flex bg-blue">
        <img src={jeremy} alt="Jeremy" />
        <div className="profile-name flex">
          <p className="text-light fs-200">Report for</p>
          <p className="name fs-500 fw-300">Jeremy Robson</p>
        </div>
      </div>
      <div className="btn-div flex">
        <a href="d">
          <button className="btn" onClick={() => setDay("daily")}>
            Daily
          </button>
        </a>
        <a href="w">
          <button className="btn" onClick={() => setDay("weekly")}>
            Weekly
          </button>
        </a>
        <a href="m">
          <button className="btn" onClick={() => setDay("Monthly")}>
            Monthly
          </button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
