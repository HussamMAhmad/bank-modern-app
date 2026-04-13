import React from "react";
import styles, { layout } from "../style";
import { bill, apple, google } from "../assets";
function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse}  gap-8 w-full`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className="w-full h-full relative z-5" />
        <div
          className="absolute z-3 top-0 w-[50%] h-[50%] rounded-full
          white__gradient -left-[50%]"
        />
        <div
          className="absolute z-0 bottom-0 w-full h-full rounded-full
          pink__gradient -left-[50%]"
        />
      </div>
      <div
        className={`${styles.flexStart} flex-1 flex-col gap-10
      `}
      >
        <h1
          className="font-semibold md:text-[48px] 
          xs:text-[30px] text-[24px] text-white"
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
        <div className={`${styles.flexStart} gap-8`}>
          <img
            src={apple}
            alt="apple"
            className="w-32 h-[42px]
            object-contain cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className="w-32 h-[42px]
            object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
