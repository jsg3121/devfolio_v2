import { NextApiRequest, NextApiResponse } from 'next'

const skillList: CareerProps['skills'] = [
  { name: 'html', path: 'html', capacity: 90, grade: 3 },
  { name: 'css', path: 'css', capacity: 90, grade: 3 },
  { name: 'javascript', path: 'javascript', capacity: 80, grade: 3 },
  { name: 'typescript', path: 'typescript', capacity: 80, grade: 3 },
  { name: 'node', path: 'node', capacity: 80, grade: 3 },
  { name: 'react', path: 'react', capacity: 80, grade: 3 },
  { name: 'vue', path: 'vue', capacity: 70, grade: 2 },
  { name: 'redux', path: 'redux', capacity: 70, grade: 2 },
  { name: 'prisma', path: 'prisma', capacity: 60, grade: 2 },
  { name: 'mysql', path: 'mysql', capacity: 60, grade: 2 },
  { name: 'nextjs', path: 'nextjs', capacity: 60, grade: 2 },
  { name: 'mobx', path: 'mobx', capacity: 50, grade: 1 },
  { name: 'graphql', path: 'graphql', capacity: 50, grade: 1 },
  { name: 'docker', path: 'docker', capacity: 50, grade: 1 },
]

const careerList: CareerProps['career'] = [
  {
    company: '큐버',
    startDate: '2020. 11',
    endDate: '재직중',
    career: [
      {
        name: '서경방송 관리자 페이지 고도화 (OTA Server, 업데이트 관리)',
        date: '2021.11~2021.04',
        description: [
          '원격 관리자 페이지 내 STB, RCU 등의 펌웨어를 관리, 배포 할 수 있는 페이지 구현',
          'React, TypeScript를 사용한 원격관리 관리자 페이지 화면 구현',
          'Redux를 사용한 STB 정보의 데이터 상태관리 구현',
          'React-query를 사용하여 서버의 API요청을 통한 펌웨어 데이터 정보 조회 및 수정 적용 기능 구현',
        ],
      },
      {
        name: '서경방송 관리자 페이지 고도화 (원격)',
        date: '2021.06~2021.11',
        description: [
          '서경 방송사의 STB 원격 관리 페이지 구현',
          'React, TypeScript를 사용한 원격관리 관리자 페이지 화면 구현',
          'Mobx를 사용한 STB 정보의 상태관리 및 데이터 변경 및 적용기능 구현',
          'Redux 이용한 관리자 계정 토큰관리 및 로그인, 로그아웃 기능 구현',
          'Redux Middleware를 이용하여 관리자 계정의 로그인, 로그아웃 토큰 관리 구현',
        ],
      },
      {
        name: '서경방송 관리자 페이지 고도화 (검색)',
        date: '2021.03~2021.06',
        description: [
          'React, TypeScript를 사용한 검색서버 관리자 페이지 화면 구현',
          'Node.js로 구현된 서버로 API를 요청하여 검색 VOD, 관리자 계정 토큰 관리기능 구현',
        ],
      },
      {
        name: '서경방송 STB(셋톱박스) Launcher APP UI 유지보수',
        date: '2021.03~2021.12',
        description: [
          'Vue를 이용한 STB셋톱박스 런처 앱 UI 유지보수',
          '현재 시간기준 방송 리스트 정보 조회 API 수정',
          'Vuex를 통한 상태관리를 이용하여 성인방송, 유료 결제 채널등의 정보를 조회하고 관리하는 기능 수정',
          '서버와의 API통신을 이용한 Launcher App의 현재버전, 최신버전 조회 및 업데이트 확인 UI 추가 ',
        ],
      },
      {
        name: '네파 스마트미러, 태블릿 APP 장바구니 및 결제 기능 추가',
        date: '2020.11~2021.02',
        description: [
          '네파 오프라인 매장에 설치되어 있는 SmartMirror내 장바구니 페이지 화면 구현',
          '네파 오프라인 매장에서 직원사용 Tablet App 장바구니 페이지 화면 구현',
          'Observable 패턴을 사용하여 SmartMirror, Tablet App 제품 화면에서 구매할 아이템을 선택, 취소하여 장바구니에 적용되도록 기능구현',
        ],
      },
    ],
  },
  {
    company: '크리섹터',
    startDate: '2019. 06',
    endDate: '2020. 08',
    career: [
      {
        name: 'Kisan Management System',
        date: '2020.06~2020.07',
        description: [
          '직원 업무 관리 시스템 화면 구현',
          'JavaScript를 이용한 Tree, TimePicker등의 기능 직접 구현',
        ],
      },
      {
        name: 'Toyota Prius C Crossover Detail Page',
        date: '2020.01~2020.04',
        description: [
          '토요타 Priuse C Crossover 차량 모델 페이지 화면 구현',
          '해당 차량 모델의 이벤트 페이지 구현',
          'API통신을 이용한 이벤트 응모기능과 당첨자 리스트 및 당첨 정보 표시',
          '검색 기능을 통해 중복 당첨자 및 당첨자 조회 기능 제작',
        ],
      },
      {
        name: '선주상호보험 홈페이지 개발',
        date: '2019.08~2019.11',
        description: [
          `한국선주상호보험 사이트 및 관리자 페이지 개발 및 유지보수`,
        ],
      },
    ],
  },
]

const handler = (_: NextApiRequest, res: NextApiResponse<CareerProps>) => {
  const data: CareerProps = {
    career: careerList,
    skills: skillList,
  }

  res.send(data)
  res.end()
}

export default handler
