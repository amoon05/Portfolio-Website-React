import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const projectClick = () => {
        navigate("/");
        projectsScroll();
    };

    const projectsScroll = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.navbarTitle} href="#">
                Aaron Moon
            </a>
            <div className={styles.navbarMenu}>
                <img className={styles.menuButton} src={menuOpen ? getImageUrl("nav/Dropdown Menu.png") : getImageUrl("nav/Dropdown Menu.png")} alt="Dropdown-Menu" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <button onClick={projectClick}>Projects</button>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1f73HZow7ib2t-XORvRvsCT08-ix6_0X-/view?usp=sharing" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
};
