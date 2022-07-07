import isEqual from 'fast-deep-equal'
import React from 'react'
import contact from 'styles/contact.module.scss'

interface ContactItemProps {
  name: string
  children: React.ReactNode
}

const ContactItem: React.FC<ContactItemProps> = (props) => {
  const { name, children } = props

  return (
    <>
      <div className={contact.icon}>{children}</div>
      <div className={contact.tooltip}>
        <p>{name}</p>
      </div>
    </>
  )
}

export default React.memo(ContactItem, isEqual)
