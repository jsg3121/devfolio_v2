import axios from 'axios'
import { ContactFile, ContactIcon } from 'components'
import isEqual from 'fast-deep-equal'
import React from 'react'
import contact from 'styles/contact.module.scss'
import useSWR from 'swr'

const Contact: React.FC = () => {
  const { data } = useSWR<ContactProps>('/api/contact', async () => {
    return await axios
      .request({
        method: 'GET',
        url: '/api/contact',
      })
      .then((res) => res.data)
  })

  return (
    <section className={contact.contact} id="contact">
      <div className={contact['contact__content--contact']}>
        <h1>Contact</h1>
        <div className={contact['contact__more-info']}>
          <ul className={contact['contact__icon-list']}>
            {data &&
              data.iconLink.map((item, index) => {
                return (
                  <li key={index}>
                    <ContactIcon img={item.img} link={item.link} />
                  </li>
                )
              })}
          </ul>
          <ul className={contact['contact__icon-list']}>
            {data &&
              data.iconFile.map((item, index) => {
                return (
                  <li key={index}>
                    <ContactFile img={item.img} path={item.path} />
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Contact, isEqual)
