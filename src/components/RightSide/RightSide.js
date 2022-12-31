import React from "react";
import "./rightside.css";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <>
      <div className="rightSide">
        <div className="navIcon">
          <img src={Home} alt="" />
          <UilSetting />
          <img src={Notification} alt="" />
          <img src={Comment} alt="" />
        </div>
        <TrendCard />
        <div className="button r-btn">
            Share
        </div>
      </div>
    </>
  );
};

export default RightSide;
