import React, {useState} from 'react';
import styles from "../Styles/components/Navbar.module.scss";
import {NavLink} from "react-router-dom";

const setActive = ({isActive}: {isActive: boolean}):string => isActive ? 'active-link' : '';

const Navbar = () => {



    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <NavLink className={setActive} to={'/'}><span>00</span> Home</NavLink>
                <NavLink className={setActive} to={'/destination'}><span>01</span> Destination</NavLink>
                <NavLink className={setActive} to={'/crew'}><span>02</span> Crew</NavLink>
                <NavLink className={setActive} to={'/technology'}><span>03</span> Technology</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
