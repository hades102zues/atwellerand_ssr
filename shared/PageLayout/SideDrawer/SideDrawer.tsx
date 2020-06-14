import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from "@material-ui/core";
import Link from "next/link";
import styles from "./SideDrawer.module.css";

const logo = "/asda.png";

interface Props {
  open: boolean;
  modalClick: () => any;
}

const SideDrawer: React.FC<Props> = (props) => {
  const navList: string[] = [
    "Home",
    "About",
    "Services",
    "Book Now",
    "Contact",
  ];

  const SpecialListItemText = withStyles({
    root: {
      fontSize: 16,
      marginLeft: 20,
      marginRight: 100,
    },
  })(ListItemText);

  //button simply applies some splash effect to the list Item
  const navListItems = navList.map((name, index) => (
    <Link
      key={name + index}
      href={
        name === "Home"
          ? "/"
          : name === "Book Now"
          ? "/booking"
          : `/${name.toLocaleLowerCase()}`
      }
    >
      <a>
        {" "}
        <ListItem button key={name} onClick={props.modalClick}>
          <SpecialListItemText disableTypography primary={name} />
        </ListItem>{" "}
      </a>
    </Link>
  ));

  const sidedrawerList = (
    <List>
      <Link href="/">
        <a>
          <ListItem button onClick={props.modalClick}>
            <div className={styles.nav_logo}>
              <img src={logo} alt="nav_logo" />
            </div>
          </ListItem>
        </a>
      </Link>

      {navListItems}
    </List>
  );

  //onclose triggers when hitting the backdrop
  const SideDrawer = (
    <Drawer
      variant="temporary"
      transitionDuration={500}
      onClose={props.modalClick}
      anchor="left"
      open={props.open}
    >
      {sidedrawerList}
    </Drawer>
  );

  return SideDrawer;
};

export default SideDrawer;
