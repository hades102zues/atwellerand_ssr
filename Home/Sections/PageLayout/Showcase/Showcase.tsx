import React, { Component } from "react";
import styles from "./Showcase.module.css";
import { useRouter } from "next/router";

const { Fade } = require("react-reveal");

const badge = "/asda.png";
const showcaseImg = "/showcase.jpg";

interface IProps {
  children: JSX.Element;
}

const Showcase: React.FC<IProps> = ({ children }) => {
  const router = useRouter();

  return (
    <section className={styles.showcase}>
      <div className={styles.imgBox}>
        <img
          src={showcaseImg}
          alt="This image is the hero image of the home page."
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.wrapper}>
        {children}
        <div className={styles.devicePositioner}>
          <div className={styles.selling_point_space}>
            <div className={styles.selling_point_box}>
              <Fade right>
                <h1 className={styles.sellling_point__main}>
                  Returns Only You Can Treasure
                </h1>
              </Fade>
              <Fade bottom>
                <h2 className={styles.selling_point__supporting}>
                  Let us handle your errands. We save you time, stress and all
                  at a valued price!
                </h2>
              </Fade>
            </div>
          </div>

          <div className={styles.selling_point_button_space}>
            <Fade bottom>
              <div className={styles.selling_point_buttons}>
                <button
                  data-message="This is a link to the Book Now page."
                  className={`${styles.selling_point__button}  ${styles.selling_point__buttonEmphasis} `}
                  onClick={(): void => {
                    router.push("/booking");
                  }}
                >
                  Book Now
                </button>
                <button
                  data-message="This is a link to the Contact Us page."
                  className={`${styles.selling_point__button}  ${styles.selling_point__buttonNotice}`}
                  onClick={(): void => {
                    router.push("/contact");
                  }}
                >
                  Contact Us
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className={styles.badge}>
        <img src={badge} alt="errands_logo" />
      </div>
    </section>
  );
};

export default Showcase;
