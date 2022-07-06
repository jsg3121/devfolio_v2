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

  export interface WhoAmIProps {
    name: string
    imozy: `/${string}.webp`
    description: string
  }

  export interface IconLinkProps {
    img: string
    link: string
  }
  export interface IconFileProps {
    img: string
    path: `${string}.${'pdf' | 'ppt' | ''}`
  }

  export interface ContactProps {
    iconLink: Array<IconLinkProps>
    iconFile: Array<IconFileProps>
  }
}

export {}
