import React from "react";
import styles from "../style";
import Button from "./Button";
function CTA() {
  return (
    <section
      className="md:px-20 md:py-22 xs:px-10 xs:py-14 rounded-[20px] 
      bg-black-gradient-2 justify-between flex items-center w-full 
      md:flex-row flex-col gap-10 px-5 py-8 box-shadow"
    >
      <div className={`${styles.flexStart} flex-col`}>
        <h1 className={`${styles.heading2} mb-5`}>
          Let’s try our service now!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
}

export default CTA;
