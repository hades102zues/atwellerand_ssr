import React from 'react';
import styles from './Submitted.module.css'

const submittedPage:React.FC = () => {


    return(
        <div className={styles.submit}>
            <p>Your Form Has Been Submitted.</p>
        </div>
    );
}

export default submittedPage;