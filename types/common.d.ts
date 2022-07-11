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

  interface Skills {
    name: string
    path: string
    capacity: number
    grade: number
  }

  interface CareerDetail {
    name: string
    date: string
    description: Array<string>
  }

  interface Career {
    company: string
    startDate: string
    endDate: string
    career: Array<CareerDetail>
  }

  export interface CareerProps {
    skills: Array<Skills>
    career: Array<Career>
  }

  export interface WhoAmIProps {
    name: string
    imozy: `/${string}.webp`
    description: string
  }

  export interface IconLinkProps {
    name: string
    img: string
    link: string
  }
  export interface IconFileProps {
    name: string
    img: string
    path: `${string}.${'pdf' | 'ppt' | ''}`
  }

  export interface ContactProps {
    iconLink: Array<IconLinkProps>
    iconFile: Array<IconFileProps>
  }
}

export {}
