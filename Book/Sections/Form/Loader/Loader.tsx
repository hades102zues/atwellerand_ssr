import React from 'react';
import styles from './Loader.module.css';


const loaderBar:React.FC= () =>{
    return(
        <div className={styles.loader}>Sending...</div>
    );
}

export default loaderBar;