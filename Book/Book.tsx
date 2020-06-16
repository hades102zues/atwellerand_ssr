import React from "react";
import styles from "./Book.module.css";

import Showcase from "./Sections/MiniShowcase/MiniShowcase";
import ReservationForm from "./Sections/Form/ReservationForm";

const Book: React.FC = () => {
  return (
    <div className="">
      <Showcase />

      <div className={styles.wrapper}>
        <div className={styles.tell_space}>
          <h3>
            Bookings can be made via What'sapp/ #2300244 or Facebook Messenger.
          </h3>
          <h3 style={{ marginTop: 10 }}>
            Or, fill out the service request form below and we will get back to
            you as soon as we can.
          </h3>
        </div>
      </div>

      <ReservationForm />
    </div>
  );
};

export default Book;
