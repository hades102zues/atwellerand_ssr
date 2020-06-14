import React from "react";
import styles from "./Contact.module.css";

import Showcase from "./Sections/MiniShowcase/MiniShowcase";
import ContactForm from "./Sections/Form/Form";
import Info from "./Sections/Info/Info";

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <Showcase />

      <div className={styles.wrapper}>
        <div className={styles.tell_space}>
          <h3> We just require a few details to enable us to contact you.</h3>
        </div>
      </div>

      <ContactForm />

      <Info />
    </div>
  );
};

export default Contact;
