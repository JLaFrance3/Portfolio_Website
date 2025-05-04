export interface Project {
    id: number
    name: string
    updated: Date
    repoUrl: string
    description: string
    imageUrl: string[]
    videoUrl: string | null
    techStack: string[]
}