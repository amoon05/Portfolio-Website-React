import React from "react";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className={styles.introContainer}>
            <div className={styles.introText}>
                <h1>
                    Hi, I’m <span className={styles.coloredWord}>Aaron</span>
                </h1>
                <p>
                    I’m a <span className={styles.coloredWord}>web developer</span> transforming creative visions into the virtual world
                </p>
            </div>
            <img className={styles.introIcon} src={getImageUrl("intro/Moon Icon.png")} alt="Moon-Icon" />
        </section>
    );
};