import React from 'react'
import isEqual from 'fast-deep-equal'
import contact from 'styles/contact.module.scss'
import { Image } from 'components'
import Link from 'next/link'

const Contact: React.FC = () => {
  return (
    <section className={contact.contact} id="contact">
      <h1>Contact</h1>
      <div className={contact['contact__content--interview']}>
        <h2>Who Am I?</h2>
        <div>
          <div className={contact.contact__teller}>
            <div className={contact['contact__profile-image']}>
              <Image
                src="/about_img_sample.webp"
                layout="fill"
                alt="imozy"
                priority
              />
            </div>
            <div className={contact['contact__teller-description']}>
              <p>
                자신의 맡은 일을 충실히 수행하는 친구입니다. 프로젝트 진행 시
                자신의 맡은 역할을 일정에 차질없이 진행하고 팀원들과의 관계도
                조율하며 좋은 결과를 내기 위해 노력합니다.
              </p>
              <span>이건우 사원 / 개발자 </span>
            </div>
          </div>
          <div className={contact.contact__teller}>
            <div className={contact['contact__profile-image']}>
              <Image
                src="/about_img_sample.webp"
                layout="fill"
                alt="imozy"
                priority
              />
            </div>
            <div className={contact['contact__teller-description']}>
              <p>
                장선규 팀원은 자기가 맡은 일에 적극적이면서 책임감을 느끼며
                프로젝트 팀원 간의 커뮤니케이션이 좋아 팀원들에 의사소통을
                책임짐, 화면 설계에 대한 이해도가 높고 항상 새로운 기술들을
                습득하려고 하여 프로젝트에서 좋은 결과를 냅니다
              </p>
              <span>류성필 주임 / 개발자</span>
            </div>
          </div>
          <div className={contact.contact__teller}>
            <div className={contact['contact__profile-image']}>
              <Image
                src="/about_img_1.webp"
                layout="fill"
                alt="imozy"
                priority
              />
            </div>
            <div className={contact['contact__teller-description']}>
              <p>
                협업에 대한 마인드가 열려있는 직원. 개발적인 내용을 잘 몰라
                얼렁뚱땅 설명하여도 불평없이 잘 수용 하여 개발에 반영해 주었던
                팀원 입니다. 반영이 어려운 부분은 충분한 설명을 통해 디자이너를
                이해시키며, 다른 방법으로 진행할 수 있는 방향성을 제시해주기도
                합니다.
              </p>
              <span>금혜주 전임 / 디자이너 </span>
            </div>
          </div>
        </div>
      </div>
      <div className={contact['contact__content--contact']}>
        <h2>Contact</h2>
        <div className={contact['contact__more-info']}>
          <ul>
            <li>
              <h1>Mail</h1>
              <Link href="mailto:xodm95@gmail.com">
                <a target="_blank">xodm95@gmail.com</a>
              </Link>
            </li>
            <li>
              <h1>git</h1>
              <Link href="https://github.com/jsg3121">
                <a target="_blank">https://github.com/jsg3121</a>
              </Link>
            </li>
            <li>
              <h1>velog</h1>
              <Link href="https://velog.io/@jsg3121">
                <a target="_blank">https://velog.io/@jsg3121</a>
              </Link>
            </li>
            <li>
              <h1>wakatime</h1>
              <Link href="https://wakatime.com/@jsg3121">
                <a target="_blank">https://wakatime.com/@jsg3121</a>
              </Link>
            </li>
            <li>
              <h2>
                더 많은 정보는 좌측 아이콘으로 이동하여 확인하실 수 있어요!
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Contact, isEqual)
