import React from 'react';
import styles from './Header.module.css';
import Hamburger from './Hamburger/Hamburger';
import { NavLink } from 'react-router-dom';

const header_logo = require('./assets/asda.jpg');
const {withRouter }= require('react-router-dom'); //del

interface IProps{
    clickForBurger: () =>any,
    
}

const header:React.FC<IProps> = (props) =>{


    const navName = ['Home', 'Services', 'About', 'Book Now','Contact'];

    const navLinks = navName.map((name:string,  index:number):JSX.Element=>(
        <NavLink exact activeClassName={styles.navHighlight} key={name+index} to={name === "Home" ? "/" : name === "Book Now" ? "/booking" : `/${name.toLocaleLowerCase()}`} >
                <p className={styles.nav_link_box__item}>{name}</p>
        </NavLink>
    ));

    
    return( <header>
        <div className={styles.wrapper}>
        <div className={styles.header_space}>
        <div className={styles.logo_space}>
        <NavLink to='/'><div className={styles.logo_box}>
                    <img src={header_logo} alt="header_logo" />
            </div></NavLink>
        </div>
        
        <nav className={styles.nav_space}>
            <div className={styles.nav_link_box}>
                {navLinks}
            </div>
            <Hamburger click={props.clickForBurger}/>
        </nav>
    

        </div>
        
        </div>
    </header>
    );
}

export default withRouter(header); //del