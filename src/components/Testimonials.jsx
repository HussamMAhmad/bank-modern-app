import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} w-full 
        ${styles.flexCenter} flex-col relative`}
    >
      <div
        className="absolute z-0 w-[60%] h-[60%] rounded-full 
        blue__gradient -right-[50%]"
      />
      <div
        className="flex items-center justify-between md:flex-row 
        flex-col gap-5 max-md:text-center mb-6 sm:mb-16 relative z-1"
      >
        <h1
          className="md:text-[48px] xs:text-[30px] max-w-[500px]
          text-[24px] font-semibold text-white flex-1"
        >
          What people are saying about us
        </h1>
        <p
          className="font-normal xs:text-[18px] text-[14px] 
          text-dimWhite flex-1 max-w-[500px]"
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div
        className="flex items-center md:justify-between 
        gap-5 flex-wrap justify-center"
      >
        {feedback.map((el) => (
          <div
            key={el.id}
            className={`${styles.flexStart} px-10 py-12 gap-4 flex-col 
            feedback-card rounded-[20px] cursor-pointer`}
          >
            <div className="w-[42px] h-[27px]">
              <img
                src={quotes}
                alt="quotes"
                className="w-full h-full object-contain"
              />
            </div>
            <h4
              className="xs:text-[18px] text-[14px] 
              font-normal text-dimWhite max-w-[290px] ss:h-32 h-20"
            >
              {el.content}
            </h4>
            <div className="flex justify-start items-center">
              <div className="w-12 h-12 mr-2.5">
                <img
                  src={el.img}
                  alt="people"
                  className="w-full h-full
                  rounded-full object-contain"
                />
              </div>
              <div>
                <h5
                  className="text-white ss:text-[20px] 
                  text-[16px] font-normal"
                >
                  {el.name}
                </h5>
                <p
                  className="ss:text-[16px] font-normal 
                  text-dimWhite text-[14px]"
                >
                  {el.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
