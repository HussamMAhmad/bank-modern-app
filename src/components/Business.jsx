import React from "react";
import { send, shield, star } from "../assets";
import styles from "../style";
import Button from "./Button";
import { features } from "../constants";
function Business() {
  return (
    <div
      id="features"
      className={`w-full flex items-center gap-20
      justify-between ${styles.paddingY} md:flex-row flex-col`}
    >
      <div
        className="flex justify-start items-start gap-10
        flex-col flex-1 md:mr-8 max-w-[600px]"
      >
        <h1
          className="font-semibold md:text-[48px] xs:text-[32px]
            text-[24px] text-white"
        >
          You do the business, we’ll handle the money.
        </h1>
        <p className="font-normal text-[16px] text-dimWhite max-w-[470px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex-1 flex flex-col items-start gap-10">
        {features.map((el) => {
          return (
            <div
              key={el.id}
              className="flex items-center cursor-pointer
                justify-start gap-5 w-full feature-card
                sm:flex-row flex-col p-6 rounded-[20px]"
            >
              <div
                className="p-3 w-16 h-16 flex 
                  items-center rounded-[50%] bg-dimBlue justify-center"
              >
                <img
                  src={el.icon}
                  alt="icon"
                  className="h-[50%] w-[50%] object-contain"
                />
              </div>
              <div className="max-sm:text-center">
                <h1
                  className="font-600 text-[18px]
                  text-white mb-1"
                >
                  {el.title}
                </h1>
                <p
                  className="font-normal text-[16px] text-dimWhite 
                    max-w-[470px]"
                >
                  {el.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Business;
