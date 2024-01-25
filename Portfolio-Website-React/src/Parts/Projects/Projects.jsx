import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
    return(
        <section id="projects" className={styles.projectsList}>
            <h2 className={styles.projectsTitle}>
                <span className={styles.regularText}>Here are some of my </span><span className={styles.boldText}>Projects</span>
            </h2>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsText}>
                    <h2>
                        Portfolio Website  V1
                    </h2>
                    <h3>
                        HTML, CSS
                    </h3>
                    <p>
                        My first front-end project. It is a responsive website serving as a base home page displaying my professional portfolio. This project is also hosted on GitHub pages.
                    </p>
                </div>
                <a className={styles.pictureContainer} href="https://amoon05.github.io/Portfolio-Website-HTML-and-CSS/" target="_blank"><img className={styles.projectsPicture} src={getImageUrl("projects/Website Picture V1.png")} alt="Website-Picture-V1" /></a>
            </div>
            <div className={styles.projectsContainer}>
                <a className={styles.pictureContainer} href="https://aaronmoon.netlify.app" target="_blank"><img className={styles.projectsPicture} src={getImageUrl("projects/Website Picture V2.png")} alt="Website-Picture-V2" /></a>
                <div className={styles.projectsText2}>
                    <h2>
                        Portfolio Website  V2
                    </h2>
                    <h3>
                        React, JavaScript, HTML, CSS
                    </h3>
                    <p>
                        My second front-end project. It is a responsive website serving as a base home page displaying my professional portfolio. This project is hosted on Netlify.
                    </p>
                </div>
            </div>
        </section>
    );
};