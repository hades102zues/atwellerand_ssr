import React from "react";
import styles from "./Header.module.css";
import Hamburger from "./Hamburger/Hamburger";
import Link from "next/link";
import { useRouter } from "next/router";

const header_logo = "/asda.png";

interface IProps {
  clickForBurger: () => any;
}

const header: React.FC<IProps> = (props) => {
  const navName = ["Home", "Services", "About", "Book Now", "Contact"];
  const router = useRouter();

  const navLinks = navName.map(
    (name: string, index: number): JSX.Element => {
      let localHref: string =
        name === "Home"
          ? "/"
          : name === "Book Now"
          ? "/booking"
          : `/${name.toLocaleLowerCase()}`;

      let activeRouteClass: string = "";
      if (localHref === router.route) {
        activeRouteClass = " " + styles.navHighlight;
      }

      return (
        <Link key={name + index} href={localHref}>
          <a className={styles.nav_link_box__item + activeRouteClass}>
            <p className={styles.nav_link_box__item}>{name}</p>
          </a>
        </Link>
      );
    }
  );

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.header_space}>
          <div className={styles.logo_space}>
            <Link href="/">
              <a>
                <div className={styles.logo_box}>
                  <img src={header_logo} alt="header_logo" />
                </div>
              </a>
            </Link>
          </div>

          <nav className={styles.nav_space}>
            <div className={styles.nav_link_box}>{navLinks}</div>
            <Hamburger click={props.clickForBurger} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default header; //del
