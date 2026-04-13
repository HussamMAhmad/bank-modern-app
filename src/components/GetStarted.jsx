import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} rounded-full p-1
      w-[140px] h-[140px] bg-blue-gradient cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} bg-primary w-full 
          h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-col
          text-gradient text-[18px] font-medium`}>
          <div className="flex">
            <span className="text-gradient">Get</span>
            <img src={arrowUp} alt="arrowup" className="ml-2
              w-[23px] h-[23px] object-contain"/>
          </div>
          <span className="">Started</span>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
