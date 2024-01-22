import React from "react";
import styles from "./Technologies.module.css";
import { getImageUrl } from "../../utils";

export const Technologies = () => {
    return(
        <section>
            <h2 className={styles.technologiesTitle}>
                <span className={styles.boldText}>Technologies</span> I utilize
            </h2>
            <div className={styles.technologiesContainer}>
                <div className={styles.technologiesTextContainer}>
                    <img className={styles.technologiesIcons} src={getImageUrl("technologies/HTML Logo.png")} alt="HTML-Icon" />
                    <p className={styles.technologiesText}>
                        HTML
                    </p>
                </div>
                <div className={styles.technologiesTextContainer}>
                    <img className={styles.technologiesIcons} src={getImageUrl("technologies/CSS Logo.png")} alt="CSS-Icon" />
                    <p className={styles.technologiesText}>
                        CSS
                    </p>
                </div>
                <div className={styles.technologiesTextContainer}>
                    <img className={styles.technologiesIcons} src={getImageUrl("technologies/React Logo.png")} alt="React-Icon" />
                    <p className={styles.technologiesText}>
                        React
                    </p>
                </div>
                <div className={styles.technologiesTextContainer}>
                    <img className={styles.technologiesIcons} src={getImageUrl("technologies/Python Logo.png")} alt="Python-Icon" />
                    <p className={styles.technologiesText}>
                        Python
                    </p>
                </div>
                <div className={styles.technologiesTextContainer}>
                    <img className={styles.technologiesIcons} src={getImageUrl("technologies/C++ Logo.png")} alt="C++-Icon" />
                    <p className={styles.technologiesText}>
                        C++
                    </p>
                </div>
                <div className={styles.technologiesTextContainer}>
                    <img className={styles.technologiesIcons} src={getImageUrl("technologies/JavaScript Logo.png")} alt="JavaScript-Icon" />
                    <p className={styles.technologiesText}>
                        JavaScript
                    </p>
                </div>
            </div>
        </section>
    );
};