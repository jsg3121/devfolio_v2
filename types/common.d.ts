declare global {
  export interface ProjectDetailTypes {
    name: string
    git: string
    detailDescription: Array<string>
    date: string
    skills: Array<string>
    detailThumbnail: Array<string>
    members: Array<string>
  }
  export interface ProjectTypes {
    index: number
    name: string
    mainDescription: string
    detail: ProjectDetailTypes
    thumbnail: string
  }

  export interface SkillsProps {
    name: string
    path: string
    capacity: number
    grade: number
  }
}

export {}
