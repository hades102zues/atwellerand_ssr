import React from "react";
import styles from "./UnknownRoute.module.css";
import Link from "next/link";

const unknown: React.FC = () => {
  return (
    <div className={styles.unkown}>
      <div className={styles.wrapper}>
        <div className={styles.info4_space}>
          <h1 className={styles.four}>404</h1>
          <h2 className={styles.tell}>SORRY, THAT PAGE DOES NOT EXIST!</h2>

          <div className={styles.button_space}>
            <div className={styles.button_box}>
              <Link href="/">
                <button className={styles.redirect_button}>
                  Return To Home Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default unknown;
