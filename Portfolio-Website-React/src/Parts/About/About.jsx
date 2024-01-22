import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutBorder}></div>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutTextContainer}>
                    <h2>
                        Hi, I’m Aaron Moon
                        </h2>
                    <h3>
                        Welcome to my virtual world
                    </h3>
                    <p>
                        I am a third-year student at University of California, San Diego majoring in Mathematics - Computer Science and minoring in Design. I am hoping to pursue a full-time career in Technical Consulting but I am also interested in Software Engineering. <br/><br/>I was born and raised in Orange County, California but I love to travel and visit new places. I love learning new things, whether it be for my professional career or exploring new hobbies, but above all, I enjoy the little things life has to offer. I enjoy spending time with my friends and family, listening to indie music on late night drives, going to the gym and climbing, exploring tasty restaurants, and so much more.
                    </p>
                    <p className={styles.aboutText}>
                        Feel free to reach out to me!
                    </p>
                    <div className={styles.aboutLinks}>
                        <p>
                            <a href="mailto:aaronmoonn@gmail.com">Email</a>
                        </p>
                        <p>
                            <a href="https://linkedin.com/in/aaronmoonn" target="_blank">LinkedIn</a>
                        </p>
                    </div>
                </div>
                <img src={getImageUrl("about/Portrait.png")} alt="" />
            </div>
        </section>
    );
};