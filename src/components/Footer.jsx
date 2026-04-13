import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
function Footer() {
  return (
    <section
      className={`${styles.flexStart} ${styles.paddingY} 
      flex-col w-full`}
    >
      <div
        className={`flex justify-start gap-8 items-center w-full 
          py-10 md:flex-row flex-col`}
      >
        <div className={`${styles.flexStart} flex-col md:w-[70%] w-full`}>
          <div className="w-[266px] h-[72px]">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p
            className="md:text-[18px] text-[14px] 
            text-dimWhite font-normal mt-5 max-w-[300px]"
          >
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex gap-10 w-full items-start flex-wrap justify-between">
          {footerLinks.map((el, index) => (
            <div
              key={index}
              className="flex items-start
                justify-start gap-3 flex-col"
            >
              <h1
                className="text-[18px] font-medium 
                mb-3 text-white "
              >
                {el.title}
              </h1>
              {el.links.map((link, index) => (
                <a
                  href={`#${link.link}`}
                  key={index + link.name}
                  className="text-[16px] font-normal text-dimWhite
                    hover:text-secondary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full flex items-center justify-between
        border-t border-dimWhite pt-8 flex-wrap gap-8"
      >
        <h1 className="text-[18px] font-normal text-dimWhite">
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </h1>
        <div className="flex">
          {socialMedia.map((el) => (
            <a key={el.id} href={`#${el.link}`} className="mr-5">
              <img
                src={el.icon}
                alt="icon"
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
