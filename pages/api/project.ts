// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const projectData: Array<ProjectTypes> = [
  {
    index: 1,
    name: 'Project Culture',
    mainDescription:
      '대학교 재학중 팀 프로젝트로 진행했던 문화공연 정보 공유 서비스를 vue를 이용하여 새롭게 만들었습니다.',
    detail: {
      name: 'Project Culture',
      date: '2020. 08 ~ 2020. 10',
      git: 'https://github.com/jsg3121/CultureProject.git',
      skills: ['vue', 'javascript', 'scss'],
      detailDescription: [''],
      detailThumbnail: [
        '/culture_detail_101.webp',
        '/culture_detail_201.webp',
        '/culture_detail_202.webp',
      ],
    },
    thumbnail: '/culture.webp',
  },
  {
    index: 2,
    name: 'Devfolio v1',
    mainDescription:
      '졸업 후 그동안 개발자로 일하고 개인적으로 새롭게 배우며 발전된 본인을 알리기 위해 만든 사이트 입니다.',
    detail: {
      name: 'Devfolio v1',
      date: '2020. 08 ~ 2020. 10',
      git: 'https://github.com/jsg3121/about-me',
      skills: ['vue', 'javascript', 'scss'],
      detailDescription: [''],
      detailThumbnail: [
        '/devfolio_v1_detail_301.webp',
        '/devfolio_v1_detail_302.webp',
        '/devfolio_v1_detail_401.webp',
      ],
    },
    thumbnail: '/devfolio_v1.webp',
  },
  {
    index: 3,
    name: 'Best Weather',
    mainDescription:
      '새로운 기술을 사용해보고 개발 역량을 늘리기 위해 일정기간을 잡고 기간안에 목표치에 달성할 수 있을만큼 만들어보자는 도전을 하며 제작한 사이트 입니다.',
    detail: {
      name: 'Best Weather',
      date: '2021. 07 ~ 2021. 12',
      git: 'https://github.com/jsg3121/WeatherVue',
      skills: ['vue', 'typescript', 'node', 'prisma', 'mysql', 'docker'],
      detailDescription: ['', ''],
      detailThumbnail: ['/weather_detail_101.webp', '/weather_detail_102.webp'],
    },
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
