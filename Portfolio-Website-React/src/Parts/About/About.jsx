import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutBorder}></div>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutTextContainer}>
                    <motion.h2 
                        initial={{ opacity:0, x: -500 }}
                        animate={{ opacity:1, x: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        Hi, I’m Aaron Moon
                        </motion.h2>
                    <motion.h3
                        initial={{ opacity:0, x: -500 }}
                        animate={{ opacity:1, x: 0 }}
                        transition={{ duration: 0.7}}
                    >
                        Welcome to my virtual world
                    </motion.h3>
                    <motion.p
                        initial={{ opacity:0, x: -500 }}
                        animate={{ opacity:1, x: 0 }}
                        transition={{ duration: 0.9}}
                    >
                        I am a third-year student at University of California, San Diego majoring in Mathematics - Computer Science and minoring in Design. I am hoping to pursue a full-time career in Technical Consulting but I am also interested in Software Engineering. <br/><br/>I was born and raised in Orange County, California but I love to travel and visit new places. I love learning new things, whether it be for my professional career or exploring new hobbies, but above all, I enjoy the little things life has to offer. I enjoy spending time with my friends and family, listening to indie music on late night drives, going to the gym and climbing, exploring tasty restaurants, and so much more.
                    </motion.p>
                    <motion.p 
                        className={styles.aboutText}
                        initial={{ opacity:0, x: -500 }}
                        animate={{ opacity:1, x: 0 }}
                        transition={{ duration: 1.1}}
                    >
                        Feel free to reach out to me!
                    </motion.p>
                    <div className={styles.aboutLinks}>
                        <motion.p
                            initial={{ opacity:0, x: -500 }}
                            animate={{ opacity:1, x: 0 }}
                            transition={{ duration: 1.3}}
                        >
                            <a href="mailto:aaronmoonn@gmail.com">Email</a>
                        </motion.p>
                        <motion.p
                            initial={{ opacity:0, x: -500 }}
                            animate={{ opacity:1, x: 0 }}
                            transition={{ duration: 1.5}}
                        >
                            <a href="https://linkedin.com/in/aaronmoonn" target="_blank">LinkedIn</a>
                        </motion.p>
                    </div>
                </div>
                <motion.img 
                    src={getImageUrl("about/Portrait.png")} alt=""
                    initial={{ opacity:0, x: -200 }}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ duration: 1.5}}
                />
            </div>
        </section>
    );
};