import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Divider = () => {
    return (
        <hr
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
    );
};

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <div className={styles.links}>
                <ul className={styles.linkList}>
                    <li className={styles.link}>
                        <img 
                        src={getImageUrl("contact/emailIcon.png")} 
                        alt="Email icon"/>
                        <a href="mailto:alex.lap118@gmail.com">alex.lap118@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img 
                        src={getImageUrl("contact/linkedinIcon.png")} 
                        alt="LinkedIn icon"/>
                        <a href="https://www.linkedin.com/in/alexanderlap/">linkedin.com/alexanderlap</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                        <a href="https://github.com/alexanderjlap">github.com/alexanderjlap</a>
                    </li>
                </ul>
            </div>
            <Divider />
            <p className={styles.copyright}>&copy; 2024 Alexander Lap. All Rights Reserved.</p>
        </footer>
    );
};


