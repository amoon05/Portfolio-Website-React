import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
        const[menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.navbarTitle} href="#">
                Aaron Moon
            </a>
            <div className={styles.navbarMenu}>
                <img className={styles.menuButton} src={menuOpen ? getImageUrl("nav/Dropdown Menu.png") : getImageUrl("nav/Dropdown Menu.png")} alt="Dropdown-Menu" onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1f73HZow7ib2t-XORvRvsCT08-ix6_0X-/view?usp=sharing" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};