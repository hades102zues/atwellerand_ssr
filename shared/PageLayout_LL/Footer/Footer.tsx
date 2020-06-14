import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const logo = require("./assets/asda.png");
const fb_icon = require("./assets/icons8-facebook-48.png");

const footer: React.FC = () => {
    const navName = ["Home", "Services", "About", "Book Now", "Contact"];

    const navLinks = navName.map(
        (name: string, index: number): JSX.Element => (
            <NavLink
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                key={name + index}
                to={name === "Home" ? "/" : name === "Book Now" ? "/booking" : `/${name.toLocaleLowerCase()}`}
            >
                <p style={{ color: "white" }}>{name}</p>
            </NavLink>
        )
    );

    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.info_space}>
                    <div className={styles.company_space}>
                        <div className={styles.company_box}>
                            <div className={styles.company_footer_img_box}>
                                <img src={logo} alt="company_logo" className={styles.company_footer_logo} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.link_space}>
                        <div className={styles.link_box}>
                            <p className={styles.footer_heading}>Useful Links</p>
                        </div>
                    </div>

                    <div className={styles.media_space}>
                        <div className={styles.media_box}>
                            <p className={styles.footer_heading}>Social Links</p>
                        </div>
                    </div>
                </div>

                <div className={styles.something_info_space}>
                    <div className={styles.business_info_space}>
                        <div className={styles.business_info_box}>
                            <div className={styles.info_box}>
                                <p className={styles.info_box__details}>
                                    Lot 39 Rendezvous Ridge, <br />
                                    Christ Church, Barbados.
                                </p>
                                {/* <p className={styles.info_box__details}>1-246-230-0244</p>*/}
                                {/*  <p className={styles.info_box__details}>asdabarbados2016@gmail.com</p> */}
                                <p className={styles.info_box__details}>
                                    Opening Hours: <br />
                                    Monday to Friday 8am to 5pm.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nav_link_space}>
                        <div className={styles.footer_nav_link_box}>{navLinks}</div>
                    </div>
                    <div className={styles.social_link_space}>
                        <div className={styles.social_link_box}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://facebook.com/ASDA-Errand-Rental-Service-347212308788857"
                            >
                                {" "}
                                <div className="social_icon_box">
                                    <img src={fb_icon} alt="A link to the ASDA, Errand and Rental Service, Facebook page." />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright_space}>
                    <p className={styles.copy_text}>
                        &copy; 2020, ASDA Errand & Rental Service. <br />
                    </p>
                    {/* {  <p>
                        {" "}
                        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
                            Icons provided by icons8.com
                        </a>
                    </p>} */}
                </div>
            </div>
        </footer>
    );
};

export default footer;
