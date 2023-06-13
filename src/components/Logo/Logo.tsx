import React from 'react';
import styles from './logo.module.css';

import {IoPlanet} from "react-icons/io5";

const Logo: React.FC = () => {
    return (
        <div className={styles.logoContainer}>
            <div className={styles.iconContainer}>
                <IoPlanet color='white' size={18} />
            </div>
            <span className={styles.logoText}>Movie API</span>
        </div>
    )
}

export default Logo;
