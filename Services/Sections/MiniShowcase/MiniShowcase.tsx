import React from "react";
import styles from "./MiniShowcase.module.css";

const MiniShowcase: React.FC = () => {
  return (
    <div className={styles.mini_showcase}>
      <div className={styles.wrapper}>
        <div className={styles.showcase_title_space}>
          <div className={styles.showcase_box}>
            <h1 className={styles.showcase_text}> Services</h1>
            <h3>What we offer at ASDA Errand & Rental Service.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniShowcase;
