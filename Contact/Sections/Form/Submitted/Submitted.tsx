import React from "react";
import styles from "./Submitted.module.css";

const submittedPage: React.FC = () => {
  return (
    <div className={styles.submit}>
      <p>Your contact form has been submitted.</p>
    </div>
  );
};

export default submittedPage;
