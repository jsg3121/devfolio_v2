import axios from 'axios'
import isEqual from 'fast-deep-equal'
import Link from 'next/link'
import React from 'react'
import contact from 'styles/contact.module.scss'
import useSWR from 'swr'

const Contact: React.FC = () => {
  const { data } = useSWR<Array<WhoAmIProps>>('/api/contact', async () => {
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
