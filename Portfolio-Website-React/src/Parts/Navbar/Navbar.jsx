import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

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
            <a className={styles.navbarTitle} href="#">
                <motion.div
                    whileHover={{ scale: 1.1}}
                    initial={{ opacity:0, x: 200 }}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ duration: 1.5}}
                >
                    <Link to="/">Aaron Moon</Link>
                </motion.div>
            </a>
            </a>
            <div className={styles.navbarMenu}>
                <img className={styles.menuButton} src={menuOpen ? getImageUrl("nav/Dropdown Menu.png") : getImageUrl("nav/Dropdown Menu.png")} alt="Dropdown-Menu" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.1}}
                            initial={{ opacity:0, x: 200 }}
                            animate={{ opacity:1, x: 0 }}
                            transition={{ duration: 0.5}}
                        >
                            <button onClick={projectClick}>Projects</button>
                        </motion.div>
                        
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity:0, x: 200 }}
                            animate={{ opacity:1, x: 0 }}
                            transition={{ duration: 1}}
                        >
                            <Link to="/about">About</Link>
                        </motion.div>
                        
                    </li>
                    <li>
                        <motion.div
                            whileHover={{ scale: 1.1}}
                            initial={{ opacity:0, x: 200 }}
                            animate={{ opacity:1, x: 0 }}
                            transition={{ duration: 1.5}}
                        >
                            <a href="https://drive.google.com/file/d/1f73HZow7ib2t-XORvRvsCT08-ix6_0X-/view?usp=sharing" target="_blank">Resume</a>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </nav>
  );
};
