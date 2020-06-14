import React, { Component } from "react";
import styles from "./Showcase.module.css";

const { Fade } = require("react-reveal");
const { withRouter } = require("react-router-dom");

const badge = require("./assets/asda.png");

interface IProps {
    history: any;
    children: JSX.Element;
}

class Showcase extends Component<IProps, {}> {
    render() {
        return (
            <section className={styles.showcase}>
                <div className={styles.overlay} />
                <div className={styles.wrapper}>
                    {this.props.children}
                    <div className={styles.devicePositioner}>
                        <div className={styles.selling_point_space}>
                            <div className={styles.selling_point_box}>
                                <Fade right>
                                    <h1 className={styles.sellling_point__main}>Returns Only You Can Treasure</h1>
                                </Fade>
                                <Fade bottom>
                                    <h2 className={styles.selling_point__supporting}>
                                        We save you time, stress and all at a valued price!
                                    </h2>
                                </Fade>
                            </div>
                        </div>

                        <div className={styles.selling_point_button_space}>
                            <Fade bottom>
                                <div className={styles.selling_point_buttons}>
                                    <button
                                        data-message="This is a link to the Book Now page."
                                        className={`${styles.selling_point__button}  ${styles.selling_point__buttonEmphasis} `}
                                        onClick={(): void => {
                                            this.props.history.push("/booking");
                                        }}
                                    >
                                        Book Now
                                    </button>
                                    <button
                                        data-message="This is a link to the Contact Us page."
                                        className={`${styles.selling_point__button}  ${styles.selling_point__buttonNotice}`}
                                        onClick={(): void => {
                                            this.props.history.push("/contact");
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className={styles.badge}>
                    <img src={badge} alt="errands_logo" />
                </div>
            </section>
        );
    }
}

export default withRouter(Showcase);
