import isEqual from 'fast-deep-equal'
import Link from 'next/link'
import React from 'react'
import footer from '/styles/footer.module.scss'

const Footer: React.FC = () => {
  return (
    <section className={footer.footer}>
      <div className={footer.footer__content}>
        <div className={footer.content__info}>
          <Link href="https://github.com/jsg3121/devfolio_v2">
            <a>이 사이트가 어떻게 만들어졌는지 궁금하다면? </a>
          </Link>
          👈👈👈
        </div>
        <div className={footer.content__copyright}>
          <p>Designed & Build by Sungyu Jang</p>
          <p>Copyright 2022.Sungyu Jang All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Footer, isEqual)
