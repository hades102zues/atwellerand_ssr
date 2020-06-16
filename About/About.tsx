import React from "react";
import styles from "./About.module.css";

import Reviews from "../shared/Reviews/Reviews";
import CompanyInfo from "./Sections/Company/Company";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <CompanyInfo />
      <Reviews />
    </div>
  );
};

export default About;
