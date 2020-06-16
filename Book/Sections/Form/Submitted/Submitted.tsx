import React from "react";
import styles from "./Submitted.module.css";

const SubmittedPage: React.FC = () => {
  return (
    <div className={styles.submit}>
      <p>Your reservation form has been submitted.</p>
    </div>
  );
};

export default SubmittedPage;
