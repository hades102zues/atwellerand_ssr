import React from "react";
import styles from "./Info.module.css";

const clock_icon = "/icons8-clock-48.png";
const location_icon = "/icons8-marker-48 (1).png";
const phone_icon = "/icons8-phone-48.png";
const email_icon = "/icons8-secured-letter-48.png";

const Info: React.FC = () => {
  return (
    <section className={styles.sec_padding}>
      <div className={styles.bussiness_info_space}>
        <div className={styles.wrapper}>
          <div className={styles.info_group}>
            <div className={styles.info_group__icon_img_box}>
              <img src={location_icon} alt="icon" />
            </div>
            <p className={styles.info_group__info}>
              <b>Location :</b>
              <br /> Lot 39 Rendezvous Ridge, <br />
              Christ Church, Barbados.{" "}
            </p>
          </div>

          <div className={styles.info_group}>
            <div className={styles.info_group__icon_img_box}>
              <img src={phone_icon} alt="icon" />
            </div>
            <p className={styles.info_group__info}>
              <b>Contact Number :</b>
              <br /> (246) 230-0244
            </p>
          </div>

          <div className={styles.info_group}>
            <div className={styles.info_group__icon_img_box}>
              <img src={email_icon} alt="icon" />
            </div>
            <p className={styles.info_group__info}>
              <b>Email :</b>
              <br /> asdabarbados2016@gmail.com{" "}
            </p>
          </div>

          <div className={styles.info_group}>
            <div className={styles.info_group__icon_img_box}>
              <img src={clock_icon} alt="icon" />
            </div>
            <p className={styles.info_group__info}>
              <b>Working Hours :</b>
              <br /> Monday to Friday: 8am-5pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
