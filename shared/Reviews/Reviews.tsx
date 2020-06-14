import React from "react";
import styles from "./Reviews.module.css";
import Testimonial from "./Testimonial/Testimonial";

const reviews: React.FC = () => {
    return (
        <section className={` ${styles.sec_padding} ${styles.testimonial_section} `}>
            <div className={styles.overlay} />
            <div className={styles.wrapper}>
                <h2 className={styles.section__title}>Client Testimonials</h2>
                <Testimonial />
            </div>
        </section>
    );
};

export default reviews;
