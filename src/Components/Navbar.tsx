import React from 'react';
import styles from "../Styles/components/Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
                <li><span>00</span> Home</li>
                <li><span>01</span> Destination</li>
                <li><span>02</span> Crew</li>
                <li><span>03</span> Technology</li>
            </ul>
        </nav>
    );
};

export default Navbar;
