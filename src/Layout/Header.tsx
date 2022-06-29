import React from 'react';
import styles from '../Styles/components/Header.module.scss'
import Logo from "../Assets/shared/logo.svg";
import Navbar from "../Components/Navbar";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <span className={styles.span}/>
            <Navbar/>
        </div>
    );
};

export default Header;
