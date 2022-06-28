import { Image } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import aboutMe from 'styles/about.module.scss'
import { gsap } from 'gsap'

const AboutMe: React.FC = () => {
  const profileRef2 = React.useRef<HTMLDivElement>(null)
  const profileRef1 = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    gsap.to(profileRef1.current, {
      y: '20vh',
      duration: 1.3,
      delay: 0.3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: document.querySelector('#aboutMe'),
        start: () => window.innerHeight / 2,
        end: () => window.innerHeight / 2,
      },
    })
    gsap.to(profileRef2.current, {
      y: '6vh',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: document.querySelector('#aboutMe'),
        start: () => window.innerHeight / 2,
        end: () => window.innerHeight / 2,
      },
    })
  }, [])

  return (
    <section className={aboutMe.about} id="aboutMe">
      <h1>About Me</h1>
      <div className={aboutMe.about__content}>
        <div className={aboutMe['about__content-title']}>
          <span>
            주로 즐겨하던 게임들은 대부분 진행 난이도가 높아 입문하기 어려운
            게임 종류였습니다.
            <br />
            룰을 이해하고 노력한 뒤 발전된 플레이를 하여 한 단계씩 성장하는
            캐릭터를 보며 성취감과 뿌듯함을 느낄 수 있기 때문입니다.
            <br />
            <br />
            개발이란 과정도 목표를 향해 이해하고 시도하며 성장해, 완성된
            결과물을 보았을 때 다가오는 성취감과 뿌듯함은 게임을 할 때와 같이
            매우 소중합니다.
            <br />
            <br />
            여러 경험들을 거쳐 이제는 아무것도 없는 공간에, 협업하는 이들의 모든
            노력들을 표현할 수 있는 기술을 가졌습니다.
            <br />
            스스로 더욱 발전하며 즐거운 성취감을 느낄 수 있도록 더욱 높은 곳을
            위해 끈임없이 도전하고 노력해 나아가겠습니다.
          </span>
        </div>
      </div>
      <div className={aboutMe['about__content-profile']} ref={profileRef1}>
        <Image src="/profile.webp" alt="프로필 이미지" layout="fill" />
      </div>
      <div className={aboutMe['about__content-profile2']} ref={profileRef2}>
        <Image src="/profile_2.webp" alt="프로필 이미지" layout="fill" />
      </div>
    </section>
  )
}

export default React.memo(AboutMe, isEqual)
