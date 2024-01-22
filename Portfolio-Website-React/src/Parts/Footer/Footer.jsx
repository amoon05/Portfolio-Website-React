import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
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
                                    <a href="#projects">Projects</a>
                                </li>
                                <li>
                                    About
                                </li>
                                <li>
                                    <a href="https://drive.google.com/file/d/1f73HZow7ib2t-XORvRvsCT08-ix6_0X-/view?usp=sharing" target="_blank">Resume</a>
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
