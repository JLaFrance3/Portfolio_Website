/*
    Scroll between page sections
*/

import styles from './NavBar.module.css'
import logo from '../../assets/JL3D.webp'

export default function NavBar() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    function createNavItems() {
        return (
            <>
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('bio')}>Bio</button>
                <button onClick={() => scrollToSection('projects')}>Projects</button>
            </>
        )
    }

    return (
        <nav className={styles.navbar}>
            <button className={styles.logo} onClick={() => scrollToSection('home')}>
                <img src={logo} alt="logo image" />
            </button>
            <div className={styles['nav-items-container']}>
                { createNavItems() }
            </div>
        </nav>
    )
}