import { NextApiRequest, NextApiResponse } from 'next'

const WhoAmIData: Array<WhoAmIProps> = [
  {
    name: '김동현 / 키노라이츠 / 개발자',
    description: `신뢰, 소통, 노력 3가지 키워드가 바로 떠오르는 친구입니다, 같이 일하는 동료들과 목표를 공유하고 더 나은 결과를 만들어내고자 노력하는 모습이 모두에게 모범이 되며, 
                  사소한 의견도 자기 일처럼 놓치지 않습니다.`,
    imozy: '/about_img_sample.webp',
  },
  {
    name: '이건우 / DKBMC / 개발자',
    description: `자신의 맡은 일을 충실히 수행하는 친구입니다. 프로젝트 진행 시
                자신의 맡은 역할을 일정에 차질없이 진행하고 팀원들과의 관계도
                조율하며 좋은 결과를 내기 위해 노력합니다.`,
    imozy: '/about_img_sample.webp',
  },
  {
    name: '류성필 / 개발자',
    description: `장선규 팀원은 자기가 맡은 일에 적극적이면서 책임감을 느끼며
                프로젝트 팀원 간의 커뮤니케이션이 좋아 팀원들에 의사소통을
                책임짐, 화면 설계에 대한 이해도가 높고 항상 새로운 기술들을
                습득하려고 하여 프로젝트에서 좋은 결과를 냅니다.`,
    imozy: '/about_img_sample.webp',
  },
  {
    name: '금혜주 / 디자이너',
    description: `협업에 대한 마인드가 열려있는 직원. 개발적인 내용을 잘 몰라
                얼렁뚱땅 설명하여도 불평없이 잘 수용 하여 개발에 반영해 주었던
                팀원 입니다. 반영이 어려운 부분은 충분한 설명을 통해 디자이너를
                이해시키며, 다른 방법으로 진행할 수 있는 방향성을 제시해주기도
                합니다.`,
    imozy: '/about_img_1.webp',
  },
]

const handler = (
  _: NextApiRequest,
  res: NextApiResponse<Array<WhoAmIProps>>
) => {
  res.send(WhoAmIData)
  res.end()
}
export default handler
