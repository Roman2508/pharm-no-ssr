import React from 'react'

import styles from './Contacts.module.scss'

interface IContactsItemProps {
  position: string
  name: string
  phone: string
  email: string
}

const ContactsItem: React.FC<IContactsItemProps> = ({ position, name, phone, email }) => {
  const phoneWithoutSymbols = phone
    ? phone.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll('_', '').replaceAll(' ', '')
    : phone

  return (
    <div className={styles['contact__item']}>
      <h6 className={styles['contact__item-position']}>{position}</h6>
      <h5 className={styles['contact__item-name']}>{name}</h5>
      <a className={styles['contact__item-tel']} href={`tel:${phoneWithoutSymbols}`}>
        {phone}
      </a>
      <a className={styles['contact__item-email']} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  )
}

export default ContactsItem
