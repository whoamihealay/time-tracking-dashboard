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
      <div className="btn flex">
        <button onClick={() => setDay("daily")}>Daily</button>
        <button onClick={() => setDay("weekly")}>Weekly</button>
        <button onClick={() => setDay("Monthly")}>Monthly</button>
      </div>
    </div>
  );
};

export default Profile;
