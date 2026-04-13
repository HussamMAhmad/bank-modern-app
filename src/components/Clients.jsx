import React from "react";
import styles from "../style";
import { clients } from "../constants";
function Clients() {
  return (
    <section
      className={`${styles.paddingY} flex justify-center 
      items-center gap-[100px] my-4 w-full flex-wrap`}
    >
      {clients.map((el) => (
        <div key={el.id} className="sm:w-[190px] cursor-pointer
          flex items-center justify-center w-[100px]">
          <img
            src={el.logo}
            alt="logo"
            className="w-full h-full 
          object-contain"
          />
        </div>
      ))}
    </section>
  );
}

export default Clients;
