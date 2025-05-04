import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css'
import BioSection from './BioSection';
import ProjectsSection from './ProjectsSection';

export default function Home() {
    const curveRef = useRef<SVGPathElement | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const defaultCurveValue = 800;
    const curveRate = 5;

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    // Window resizing for svg background
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        };

        window.addEventListener('resize', handleResize);

        if (svgRef.current) {
            svgRef.current.setAttribute('viewBox', `0 0 ${window.innerWidth} 800`);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Initial width
    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.setAttribute('viewBox', `0 0 ${windowWidth} 800`);
        }
    }, [windowWidth]);

    // Svg background effect
    // https://codepen.io/armantaherian/pen/ZyZWVZ
    useEffect(() => {
        let last_known_scroll_position = 0;
        let ticking = false;

        const scrollEvent = (scrollPos: number) => {
            if (!curveRef.current) return;

            if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
                const curveValue = defaultCurveValue - scrollPos / curveRate;
                curveRef.current.setAttribute(
                    'd',
                    `M ${windowWidth} 800 Q ${windowWidth / 2} ${curveValue} 0 800 L 0 0 L ${windowWidth} 0 Z`
                );
            }
        };
        const handleScroll = () => {
            last_known_scroll_position = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    scrollEvent(last_known_scroll_position);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Run on window resize
        scrollEvent(window.scrollY);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [windowWidth]);

    return (
        <>
            <div>
                <section id="home" className={`${styles.section} ${styles.home}`}>
                    <div className={styles.svg_container}>
                        <svg viewBox={`0 0 ${windowWidth} 800`}>
                            <path
                                ref={curveRef}
                                fill="#0b0c1d"
                                d={`M ${windowWidth} 800 Q ${windowWidth / 2} 800 0 800 L 0 0 ${windowWidth} 0 Z`}
                            />
                        </svg>
                    </div>
                    <div className={styles.home_content}>
                        <h3>Hi, my name is</h3>
                        <h1>Jean LaFrance</h1>
                        <h3 className={styles.tag_line}>:Future Developer</h3>
                    </div>
                </section>
                <section id="bio" className={`${styles.section} ${styles.bio}`}>
                    <BioSection />
                </section>
                <section id="projects" className={`${styles.section} ${styles.projects}`}>
                    Project List
                </section>
            </div>
        </>
    );
}