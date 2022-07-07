import isEqual from 'fast-deep-equal'
import { contactMotion } from 'motions'
import React from 'react'
import contact from 'styles/contact.module.scss'
import ContactFile from './ContactFile'
import ContactIcon from './ContactIcon'
import ContactItem from './ContactItem'

interface ContactListProps {
  data: ContactProps
}

const ContactList: React.FC<ContactListProps> = (props) => {
  const { data } = props

  React.useEffect(() => {
    contactMotion()

    return () => contactMotion()
  }, [])

  return (
    <div className={`${contact['contact__more-info']} contact__more-info`}>
      <ul className={contact['contact__icon-list']}>
        {data &&
          data.iconLink.map((item, index) => {
            return (
              <li key={index}>
                <ContactItem name={item.name}>
                  <ContactIcon img={item.img} link={item.link} />
                </ContactItem>
              </li>
            )
          })}
      </ul>
      <ul className={contact['contact__icon-list']}>
        {data &&
          data.iconFile.map((item, index) => {
            return (
              <li key={index}>
                <ContactItem name={item.name}>
                  <ContactFile img={item.img} path={item.path} />
                </ContactItem>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default React.memo(ContactList, isEqual)
