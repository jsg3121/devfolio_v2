import React from 'react'
import isEqual from 'fast-deep-equal'
import contact from 'styles/contact.module.scss'

const Contact: React.FC = () => {
  return (
    <section className={contact.contact}>
      <h1>Contact</h1>
      <div className={contact.contact__content}>as;dlfkjasd;flkj</div>
    </section>
  )
}

export default React.memo(Contact, isEqual)
