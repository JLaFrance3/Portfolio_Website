import styles from './ProjectsSection.module.css';

const projects = [
    {
        name: 'Space Rocks',
        description: 'A fun game where you dodge/shoot rocks and upgrade your ship by collecting space crystals. ' +
            'This was a final project for one of my earlier classes and it was fun to play around with spritesheets for the first time.',
        updated: new Date('8/15/24'),
        repoUrl: 'https://github.com/JLaFrance3/Portfolio_Website',
        imageUrl: [],
        videoUrl: null,
        techStack: [
            'java Swing library'
        ]
    },
    {
        name: 'Thief of Visions',
        description: 'A semester-long project in an Agile development class, where I collaborated with a team of five. My main contribution ' +
            'was handling most of the graphics and sprite work, refining visuals to align with our design goals.',
        updated: new Date('12/4/24'),
        repoUrl: 'https://github.com/JLaFrance3/SER225-Game',
        imageUrl: [],
        videoUrl: null,
        techStack: [
            'java Swing library'
        ]
    },
    {
        name: 'Animal API',
        description: 'My first full-stack project, this webapp fetches and display animal information from a backend and allows users ' +
            'to create new animals after logging in.',
        updated: new Date('4/11/25'),
        repoUrl: 'https://github.com/JLaFrance3/AnimalAPI',
        imageUrl: [],
        videoUrl: null,
        techStack: [
            'JavaScript',
            'Node.js',
            'Express',
            'Jsonwebtoken',
        ]
    },
    {
        name: 'Rezippy',
        description: 'Rezippy is an ad-free recipe search application that prioritizes simplicity and functionality. ' +
            'This was an exciting project where I was able to play around with Gemini API and incorporate an AI to help users find recipes.',
        updated: new Date('5/1/25'),
        repoUrl: 'https://github.com/JLaFrance3/Rezippy',
        imageUrl: [],
        videoUrl: 'https://www.youtube.com/embed/81Hr2heJlYE',
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
        name: 'Portfolio Website',
        description: 'You\'re on it right now! A sleek React + TypeScript portfolio with smooth scroll and dynamic backgrounds.',
        updated: new Date('5/8/25'),
        repoUrl: 'https://github.com/JLaFrance3/Portfolio_Website',
        imageUrl: [],
        videoUrl: null,
        techStack: [
            'TypeScript',
            'React',
            'Vite'
        ]
    }
];

export default function ProjectsSection() {
    return (
        <div className={styles.projects_container}>
            <h2>Projects</h2>
            <div className={styles.projects_grid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.project_card}>
                        <div className={styles.project_content}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.repoUrl} target="_blank">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}