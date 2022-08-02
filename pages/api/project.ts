// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const projectData: Array<ProjectTypes> = [
  {
    index: 1,
    name: 'Project Culture',
    mainDescription: `대학교 재학중 팀 프로젝트로 진행했던 문화공연 정보 공유 서비스를 vue를 이용하여 새롭게 만들었습니다.
    vue 프레임워크의 기본적인 라이프 사이클을 이해하며 json 데이터를 이용한 api 비동기 호출과
    사용자가 시각적으로 느낄 수 있는 슬라이드, 무한 스크롤등의 기능을 직접 구현하였습니다.`,
    detail: {
      name: 'Project Culture',
      date: '2020. 08 ~ 2020. 10',
      git: 'https://github.com/jsg3121/CultureProject.git',
      skills: ['vue', 'javascript', 'scss'],
      detailDescription: [
        'vue 프레임워크를 이용한 웹페이지 개발했습니다.',
        'vuex를 이용한 상태관리로 사용자가 검색한 문화행사 리스트 구현하였습니다.',
        '스크롤 이벤트를 통한 지속적인 데이터 갱신으로 무한스크롤 구현하였습니다.',
        '카테고리 별 문화행사를 찾아 볼 수 있도록 검색기능 구현하였습니다.',
        '자주 보고 많이 사용하는 슬라이드 기능을 직접 구현하여 해당 기능의 로직을 이해했습니다.',
      ],
      members: ['개발 : 장선규', '디자인 : 김혜인'],
      detailThumbnail: [
        '/culture.webp',
        '/culture_detail_100.webp',
        '/culture_detail_200.webp',
        '/culture_detail_300.webp',
      ],
    },
    thumbnail: '/culture_thumb.webp',
  },
  {
    index: 2,
    name: 'Devfolio v1',
    mainDescription: `vue를 이용하여 본인을 알리고 그동안 배운 기술을 활용하기 위해 제작한 개인 포트폴리오 사이트 입니다.
    시각적 효과를 주는 인트로 모션, 프로젝트들을 소개하는 페이지의 슬라이드 모션 등을 직접 구현하며 제작하였습니다.
    `,
    detail: {
      name: 'Devfolio v1',
      date: '2020. 08 ~ 2020. 10',
      git: 'https://github.com/jsg3121/about-me',
      skills: ['vue', 'javascript', 'scss'],
      members: ['개발 : 장선규', '디자인 : 금혜주'],
      detailDescription: [
        '일을 하거나 스터디를 하며 배우고 쌓은 기술들을 활용하여 사이트를 구축했습니다.',
        '최소한의 라이브러리 사용으로 기본적인 이벤트, 모션등의 효과를 직접 구현하여 해당 기능의 로직을 이해했습니다.',
        '모바일, 태블릿 등에서도 확인 할 수 있도록 반응형으로 구현하며 javascript뿐만 아니라 css 스타일 적용에 대한 부분을 이해했습니다.',
      ],
      detailThumbnail: [
        '/devfolio_v1.webp',
        '/devfolio_v1_detail_200.webp',
        '/devfolio_v1_detail_300.webp',
        '/devfolio_v1_detail_400.webp',
        '/devfolio_v1_detail_500.webp',
      ],
    },
    thumbnail: '/devfolio_v1_detail_100.webp',
  },
  {
    index: 3,
    name: 'Best Weather',
    mainDescription: `특정 기간을 목표로 잡아 그동안의 기술을 이해하고 사용하며 기간 안에 최대한 목표에 가깝게 만들기 위한 챌린지 형식의 프로젝트 입니다.
    vue의 버전이 올라가며 새롭게 추가된 Composition API를 이해하고 사용하기 위해 프로젝트를 만들었습니다. `,
    detail: {
      name: 'Best Weather',
      date: '2021. 07 ~ 2021. 12',
      git: 'https://github.com/jsg3121/WeatherVue',
      skills: ['vue', 'typescript', 'node', 'prisma', 'mysql', 'docker'],
      members: ['개발 : 장선규', '디자인 : 금혜주'],
      detailDescription: [
        'docker와 prisma, mysql을 이용해 기상 정보를 가져오고 가공할 수 있도록 데이터베이스를 구축하였습니다.',
        'node.js를 이용하여 client에서 요청하는 데이터를 데이터베이스와 연결, 기상정보 API를 가져와 필요한 데이터를 가공후 client에게 전달해 주는 backend 서버를 구현하였습니다.',
        '모바일, 데스크탑 화면에 맞도록 반응형으로 페이지를 구현하였습니다.',
        '위치 정보를 이용하여 데이터베이스 내 좌표값을 계산해 현재 사용자가 접속한 위치를 표시할 수 있도록 구현했습니다.',
      ],
      detailThumbnail: ['/weather.webp'],
    },
    thumbnail: '/weather_detail_100.webp',
  },
  {
    index: 'This',
    name: 'Devfolio_v2',
    mainDescription: `새롭게 사용하게 된 React 라이브러리를 이용한 typescript를 이용한 Next.js프레임워크로 
                      이전 사이트보다 개선되고 웹 페이지를 제작했으며 SEO를 도입해 브라우저에서 검색시 검색 결과에 더 잘보이도록 하였습니다.`,
    detail: {
      name: 'Devfolio_v2',
      date: '2022. 06 ~ 2022. 8',
      git: 'https://github.com/jsg3121/devfolio_v2',
      skills: ['nextjs', 'typescript', 'scss'],
      detailDescription: [
        'Next.js를 이용하여 SEO에 적합한 웹 페이지를 제작했습니다.',
        'gsap라이브러리를 이용하여 최적화된 스크롤에 따라 발생하는 모션 효과를 구현했습니다.',
        '반응형 작업으로 PC뿐만 아니라 태블릿, 모바일에서도 확인 할 수 있도록 하였습니다.',
        '웹 접근성에 맞는 시멘틱 태그의 사용과 브라우저의 작동원리를 고려하여 최적화된 페이지를 제작했습니다.',
      ],
      members: ['개발 : 장선규'],
      detailThumbnail: [
        '/dev_v2_000.webp',
        '/dev_v2_thumb.webp',
        '/dev_v2_200.webp',
        '/dev_v2_300.webp',
        '/dev_v2_400.webp',
        '/dev_v2_500.webp',
        '/dev_v2_600.webp',
      ],
    },
    thumbnail: '/dev_v2_thumb.webp',
  },
]

const handler = (
  _: NextApiRequest,
  res: NextApiResponse<Array<ProjectTypes>>
) => {
  res.send(projectData)
  res.end()
}

export default handler
