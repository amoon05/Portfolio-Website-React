import React from "react";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Intro = () => {

    return (
        <section className={styles.introContainer}>
            <div className={styles.introText}>
                <h1>
                    <motion.div className={styles.animatedTextTitle}
                        initial={{ opacity:0, x:-500}}
                        animate={{ opacity:1, x:0}}
                        transition={{ duration: 1}}
                    >
                        Hi, I’m <span className={styles.coloredWord}>Aaron</span>
                    </motion.div>
                </h1>
                <motion.div className={styles.animatedText}
                    initial={{ opacity:0, x: -500 }}
                    animate={{ opacity:1, x: 0 }}
                    transition={{ duration: 1.5}}
                >
                    I’m a <span className={styles.coloredWord}>web developer</span> transforming creative visions into the virtual world
                </motion.div>
            </div>
            <motion.div className={styles.introAnimation}
                initial={{ opacity:0, x: -200 }}
                animate={{ opacity:1, x: 0 }}
                transition={{ duration: 1.5}}
            >
                <img className={styles.introIcon} src={getImageUrl("intro/Moon Icon.png")} alt="Moon-Icon" />
            </motion.div>
        </section>
    );
};