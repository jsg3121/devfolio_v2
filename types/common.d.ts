declare global {
  interface ProjectDetailTypes {
    name: string
    git: string
    detailDescription: Array<string>
    date: string
    skills: Array<string>
    detailThumbnail: Array<string>
    members: Array<string>
  }
  interface ProjectTypes {
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

  interface CareerProps {
    skills: Array<Skills>
    career: Array<Career>
  }

  interface WhoAmIProps {
    name: string
    imozy: `/${string}.webp`
    description: string
  }

  interface IconLinkProps {
    name: string
    img: string
    link: string
  }
  interface IconFileProps {
    name: string
    img: string
    path: `${string}.${'pdf' | 'ppt' | ''}`
  }

  interface ContactProps {
    iconLink: Array<IconLinkProps>
    iconFile: Array<IconFileProps>
  }
}

export {}
