import React from "react";
import styles from "./About.module.css";
import Reviews from "./Sections/Reviews/Reviews";

import CompanyInfo from "./Sections/Company/Company";

const about: React.FC = () => {
  return (
    <div className={styles.about}>
      <CompanyInfo />
      <Reviews />
    </div>
  );
};

export default about;
