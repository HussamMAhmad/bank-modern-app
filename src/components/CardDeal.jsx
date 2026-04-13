import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
function CardDeal() {
  return (
    <section className={`${layout.section} gap-8 w-full`}>
      <div
        className={`${styles.flexStart} flex-1 flex-col gap-10`}
      >
        <h1
          className="font-semibold md:text-[48px] xs:text-[30px] 
          text-[24px] text-white"
        >
          Easily control your billing & invoicing.
        </h1>
        <p
          className="font-normal md:text-[18px] text-[16px]
          text-dimWhite max-w-[470px]"
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
}

export default CardDeal;
