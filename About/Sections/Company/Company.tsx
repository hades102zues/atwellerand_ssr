import React from "react";
import styles from "./Company.module.css";

const logo = "/asda.jpg";

const Company: React.FC = () => {
  return (
    <main className={styles.sec_padding + " " + styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.company_signature_space}>
          <div className={styles.company_signature_box}>
            <div className={styles.big_logo_img_box}>
              <img
                src={logo}
                alt="company_logo"
                className={styles.company_logo}
              />
            </div>
            <p className={styles.founded}>Founded in 2005</p>
            <h2 className={styles.company_name}>
              ASDA Errand & Rental Service
            </h2>
            <p className={styles.company_slogan}>We Save You Time</p>
          </div>
        </div>
        <div className={styles.company_desc_space}>
          <div className={styles.company_desc_box}>
            <p className={styles.desc}>
              We are a family centered business that caters to all areas of the
              market. We live by our core values Honesty, Innovation, Discipline
              & Reliability. <br /> This has driven us to broaden our range of
              services as demand dictates. Our Goal is to make our clients' life
              more rewarding by giving them back the most precious asset there
              is - TIME, which can be lost doing Errands.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Company;
