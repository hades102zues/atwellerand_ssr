import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => (
  <section className={`${styles.sec_padding} ${styles.sec_grey}`}>
    <div className={styles.wrapper}>
      <div className={styles.describe_space}>
        <div className={styles.companyDescribe}>
          {/* {<div className={styles.companyDescribe__companyLogoBox}>
                    <img src={logo} alt="company_logo" />
                </div>} */}
          <article className={styles.companyDescribe__companyDescription}>
            <p className={styles.description}>
              Our Goal is to make our client's life more rewarding by giving
              them back the most precious asset there is - TIME, which can be
              lost dealing with the complications of life.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default About;
