import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Alexander Lap
            </h1>
            <p className={styles.description}>
                I am currently a junior studying at Worcester Polytechnic Institute persuing
                a bachelors in Computer Science and a masters in Cybersecurity.
                I am currently seeking an internship for next year in CS/InfoSec field.
                Reach out if you`d like to learn more!
            </p>
            <a href="mailto:alex.lap118@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
            <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero image of me" 
            className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
    )
}