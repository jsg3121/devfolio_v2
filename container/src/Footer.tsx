import React from 'react'
import isEqual from 'fast-deep-equal'
import footer from '/styles/footer.module.scss'

const Footer: React.FC = () => {
  return <section className={footer.footer}></section>
}

export default React.memo(Footer, isEqual)
