import styles from './ProjectsSection.module.css';
import { Project } from '../utils/types';
import animalWebApp from '../assets/animalWebApp.png';
import serGame from '../assets/serGame.png';

const projects: Project[] = [
    {
        name: 'Portfolio Website',
        description: 'You\'re on it right now! A sleek React + TypeScript portfolio with smooth scroll and dynamic backgrounds.',
        repoUrl: 'https://github.com/JLaFrance3/Portfolio_Website',
        image: null,
        video: null,
        aspectRatio: '16/9',
        techStack: [
            'TypeScript',
            'React',
            'Vite'
        ]
    },
    {
        name: 'Rezippy',
        description: 'Rezippy is an ad-free recipe search application that prioritizes simplicity and functionality. ' +
            'This was an exciting project where I was able to play around with Gemini API and incorporate an AI to help users find recipes.',
        repoUrl: 'https://github.com/JLaFrance3/Rezippy',
        image: null,
        video: 'https://www.youtube.com/embed/81Hr2heJlYE',
        aspectRatio: '9/16',
        techStack: [
            'Kotlin',
            'Android Studio',
            'Jetpack Compose',
            'Room/SQLite',
            'Gemini API',
            'Spoonacular API'
        ]
    },
    {
        name: 'Animal API',
        description: 'My first full-stack project, this webapp fetches and display animal information from a backend and allows users ' +
            'to create new animals after logging in.',
        repoUrl: 'https://github.com/JLaFrance3/AnimalAPI',
        image: `${animalWebApp}`,
        video: null,
        aspectRatio: '16/9',
        techStack: [
            'JavaScript',
            'Node.js',
            'Express',
            'Jsonwebtoken',
        ]
    },
    {
        name: 'Thief of Visions',
        description: 'A semester-long project in an Agile development class, where I collaborated with a team of five. My main contribution ' +
            'was handling graphics and sprite work, refining visuals to align with our design goals.',
        repoUrl: 'https://github.com/JLaFrance3/SER225-Game',
        image: `${serGame}`,
        video: null,
        aspectRatio: '16/9',
        techStack: [
            'Java',
            'java Swing library'
        ]
    },
    {
        name: 'Space Rocks',
        description: 'A fun game where you dodge/shoot rocks and upgrade your ship by collecting space crystals. ' +
            'This was a final project for one of my earlier classes and it was fun to play around with spritesheets for the first time.',
        repoUrl: 'https://github.com/JLaFrance3/Portfolio_Website',
        image: null,
        video: 'https://www.youtube.com/embed/RRBO-whFEts',
        aspectRatio: '16/9',
        techStack: [
            'Java',
            'java Swing library'
        ]
    }
];

function mediaContent(project: Project) {
    if (project.video) {
        return (
            <div className={`${styles.media_container} ${project.aspectRatio === '9/16' ? styles.tall_media : ''}`}>
                <iframe
                    width="100%"
                    height="100%"
                    src={project.video}
                    title={`${project.name} demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    } else if (project.image) {
        return (
            <div className={`${styles.media_container} ${project.aspectRatio === '9/16' ? styles.tall_media : ''}`}>
                <img src={project.image} alt={project.name} />
            </div>
        );
    }
    return null;
}

export default function ProjectsSection() {
    return (
        <div className={styles.projects_container}>
            <h2>Projects</h2>
            <div className={styles.projects_column}>
                {projects.map((project, index) => (
                    <div key={index} className={`${styles.project_card} ${project.aspectRatio === '9/16' ? styles.flex_row : ''}`}>
                        <div className={styles.project_content}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <ul>
                                {project.techStack.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                            <a href={project.repoUrl} target="_blank">View on GitHub</a>
                        </div>
                        {mediaContent(project)}
                    </div>
                ))}
            </div>
        </div>
    );
}