import isEqual from 'fast-deep-equal'
import React from 'react'
import footer from '/styles/footer.module.scss'

const Footer: React.FC = () => {
  return (
    <section className={footer.footer}>
      <div className={footer.footer__content}>
        <div className={footer.content__copyright}>
          <p>Designed & Build by Sungyu Jang</p>
          <p>Copyright 2022.Sungyu Jang All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Footer, isEqual)
