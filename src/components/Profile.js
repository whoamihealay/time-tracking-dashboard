import React from "react";

import jeremy from "../assets/image-jeremy.png";
import "./profile.css";
import Button from "./Button";

const Profile = ({
  daily,
  weekly,
  monthly,
  dailyBtn,
  weeklyBtn,
  monthlyBtn,
}) => {
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
        <Button text="Daily" onClick={daily} color={dailyBtn} />
        <Button text="Weekly" onClick={weekly} color={weeklyBtn} />
        <Button text="Monthly" onClick={monthly} color={monthlyBtn} />
      </div>
    </div>
  );
};

export default Profile;
