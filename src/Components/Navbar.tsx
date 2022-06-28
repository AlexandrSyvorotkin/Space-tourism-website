import React from 'react';
import styles from "../Styles/components/Navbar.module.scss";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <NavLink to={'/'}><span>00</span> Home</NavLink>
                <NavLink to={'/destination'}><span>01</span> Destination</NavLink>
                <NavLink to={'/crew'}><span>02</span> Crew</NavLink>
                <NavLink to={'/technology'}><span>03</span> Technology</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
