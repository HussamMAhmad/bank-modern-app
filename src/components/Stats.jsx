import React from "react";
import styles from "../style";
import { states } from "../constants/index.js";
function Stats() {
  return (
    <div className={`flex ss:items-center justify-start md:justify-between 
      ss:flex-row flex-col ${styles.paddingY} ss:justify-center 
      items-start gap-10 w-full`}>
      {states.map((stat, index) => (
        <div key={stat.id} className={`flex items-center 
          justify-center gap-3`}>
          <h1
            className="md:text-[42px] text-[30px] font-semibold 
          text-white"
          >
            {stat.value}
          </h1>
          <p className="md:text-[20px] font-normal text-[14px]
            text-gradient uppercase">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
