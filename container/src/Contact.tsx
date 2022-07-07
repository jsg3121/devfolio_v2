import axios from 'axios'
import { ContactList } from 'components'
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
        <h1>More</h1>
        {data && <ContactList data={data} />}
      </div>
    </section>
  )
}

export default React.memo(Contact, isEqual)
