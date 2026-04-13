import React from "react";
import { robot, discount } from "../assets";
import styles from "../style";
import GetStarted from "../components/GetStarted";
function Hero() {
  return (
    <section
      id="home"
      className={`flex jutify-start w-full items-center md:flex-row 
        flex-col ${styles.paddingY}`}
    >
      <div className={`${styles.paddingX} max-md:mb-6 flex-1`}>
        <div
          className="bg-discount-gradient rounded-[10px] flex
          items-center py-1.5 px-4 mb-[30px] w-fit"
        >
          <img src={discount} alt="discount" className="mr-2 h-8 w-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> DISCOUNT FOR
            <span className="text-white">1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="flex items-center justify-center w-full flex-row">
          <div
            className={`md:text-[72px] xs:text-[48px] font-semibold 
              text-white flex-1 text-[28px]`}
          >
            <h1>The Next</h1>
            <span className="text-gradient">Generation</span>
          </div>
          <div className="hidden ss:flex ml-4">
            <GetStarted />
          </div>
        </div>
        <h1
          className="md:text-[72px] xs:text-[48px] font-semibold 
              text-white flex-1 text-[28px] w-full"
        >
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-[50px] max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 relative ${styles.flexCenter}`}>
        <img
          src={robot}
          alt="robot"
          className="w-full h-full 
          z-20 relative"
        />
        <div
          className={`${styles.flexCenter} pink__gradient absolute 
          z-0 w-[40%] h-[35%] top-0`}
        />
        <div
          className={`${styles.flexCenter} white__gradient absolute 
          z-10 w-[80%] h-[80%] bottom-40 top-0 rounded-full`}
        />
        <div
          className={`${styles.flexCenter} blue__gradient absolute 
          z-0 w-[50%] h-[50%] bottom-20 right-40`}
        />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
