declare global {
  export interface ProjectDetailTypes {
    name: string
    git: string
    detailDescription: Array<string>
    date: string
    skills: Array<string>
    detailThumbnail: Array<string>
  }
  export interface ProjectTypes {
    index: number
    name: string
    mainDescription: string
    detail: ProjectDetailTypes
    thumbnail: string
  }
}

export {}
