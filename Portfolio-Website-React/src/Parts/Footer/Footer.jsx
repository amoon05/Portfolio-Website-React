import React from "react";
import styles from "./Footer.module.css";
import { Link, useNavigate } from 'react-router-dom'; // Import Link instead of BrowserRouter and Route


export const Footer = () => {
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
        <section className={styles.footer}>
            <div className={styles.footerLine}></div>
            <div className={styles.footerContainer}>
                <div>
                    <h2>
                        Let's work together!
                    </h2>
                    <div className={styles.footerTextContainer}>
                        <div className={styles.footerTextLeft}>
                            <ul>
                                <li className={styles.textLight}>
                                    Contact
                                </li>
                                <li>
                                    <a href="mailto:aaronmoonn@gmail.com">Email</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/aaronmoonn" target="_blank">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://github.com/amoon05" target="_blank">Github</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footerTextRight}>
                            <ul>
                                <li className={styles.textLight}>
                                    Navigate
                                </li>
                                <li>
                                    <button onClick={projectClick}>Projects</button>
                                </li>
                                <li>
                                    <Link to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1ayalGjyqWNYdy7xr7Yh-v5KVbF72pSa6/view?usp=sharing" target="_blank">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerTextContainerRight}>
                    <ul>
                        <li>
                            &copy; 2024 Aaron Moon
                        </li>
                        <li className={styles.textLight}>
                            Running on Energy Drinks
                        </li>
                    </ul>
                </div>
            </div>
    
        </section>
    );
};  
