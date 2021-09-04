import React from "react";
import "./taiwanNo1.css";
import ImgList from "./ImgList";
//
// IMPORT ZONE
//
const TaiwanNo1 = ({ speed = 8, width = 100 }) => {
  return (
    <div
      style={{
        borderRadius: "30px",
        width: `${width}px`,
        animation: `spin ${speed}s linear infinite`,
      }}
    >
      <img
        src={ImgList[0].taiwanNo1}
        alt="tim"
        width="100%"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default TaiwanNo1;
