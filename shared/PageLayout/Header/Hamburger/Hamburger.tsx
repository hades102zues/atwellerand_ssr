import React from "react";
import styles from "./Hamburger.module.css";

interface IProps {
    click: () => any;
}

const hamburger: React.FC<IProps> = props => {
    return (
        <div className={styles.hamburger} onClick={props.click}>
            <div className={styles.hamburger__slice} />
            <div className={styles.hamburger__slice} />
            <div className={styles.hamburger__slice} />
        </div>
    );
};

export default hamburger;
