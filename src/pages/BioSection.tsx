import styles from './BioSection.module.css'
import liIcon from '../assets/InBug-White.png'
import gitIcon from '../assets/github-mark-white.png'
import mailIcon from '../assets/protonmail-white.png'
import face from '../assets/face.png'

export default function BioSection() {
    return (
        <div className={styles.bio_card}>
            <img className={styles.face} src={face} alt="my face" />
            <h2>About Me</h2>
            <p>
                Hey, I'm Jean, a Student Veteran turning my passion for service into a career in Software Engineering.
                I love crafting clean, intuitive frontends that make apps easy to use and enjoyable to interact
                with. I see the ever-changing world of web development as an exciting opportunity to explore and 
                experiment with new technologies to build engaging user experiences.
            </p>
            <div className={`${styles.socials} ${styles.flex}`}>
                <a href="https://github.com/jlafrance3" target="_blank">
                    <img className={styles.socials_icon} src={gitIcon} alt="Github link icon" />
                </a>
                <a href="https://linkedin.com/in/jeanlafrance" target="_blank">
                    <img className={styles.socials_icon} src={liIcon} alt="LinkedIn link icon" />
                </a>
                <a href="mailto:jlafranceiii@proton.me" target="_blank">
                    <img className={styles.socials_icon} src={mailIcon} alt="Mail link icon" />
                </a>
            </div>
        </div>
    );
}
