// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const projectData: Array<ProjectTypes> = [
  {
    index: 1,
    name: 'Project Culture',
    date: '2020. 08 ~ 2020. 10',
    skills: ['vue', 'javascript', 'scss'],
    git: 'https://github.com/jsg3121/CultureProject.git',
    mainDescription:
      '대학교 재학중 팀 프로젝트로 진행했던 문화공연 정보 공유 서비스를 vue를 이용하여 새롭게 만들었습니다.',
    detail: ['', '', ''],
    thumbnail: '/culture.webp',
  },
  {
    index: 2,
    name: 'Devfolio v1',
    date: '2020. 08 ~ 2020. 10',
    skills: ['vue', 'javascript', 'scss'],
    git: 'https://github.com/jsg3121/about-me',
    mainDescription:
      '졸업 후 그동안 개발자로 일하고 개인적으로 새롭게 배우며 발전된 본인을 알리기 위해 만든 사이트 입니다.',
    detail: ['', '', ''],
    thumbnail: '/devfolio_v1.webp',
  },
  {
    index: 3,
    name: 'Best Weather',
    date: '2021. 07 ~ 2021. 12',
    skills: ['vue', 'typescript', 'node', 'prisma', 'mysql', 'docker'],
    git: 'https://github.com/jsg3121/WeatherVue',
    mainDescription:
      '새로운 기술을 사용해보고 개발 역량을 늘리기 위해 일정기간을 잡고 기간안에 목표치에 달성할 수 있을만큼 만들어보자는 도전을 하며 제작한 사이트 입니다.',
    detail: ['', '', ''],
    thumbnail: '/weather.webp',
  },
]

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Array<ProjectTypes>>
) {
  res.send(projectData)
  res.end()
}
