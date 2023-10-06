import React from 'react'
import cn from 'classnames'

import { gql } from '@/graphql/client'
import ContactsItem from './ContactsItem'
import styles from './Contacts.module.scss'
import { GetHomePageContactsQuery } from '@/graphql/__generated__'

export const Contacts: React.FC = () => {
  const [contacts, setContacts] = React.useState<GetHomePageContactsQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await gql.GetHomePageContacts()
      setContacts(data)
    }

    fetchData()
  }, [])

  return (
    <div className={styles['contacts']}>
      <div className={cn(styles['contacts__container'], 'container')}>
        {contacts && (
          <div className={styles['contacts__wrapper']}>
            <h2 className={cn(styles['contacts__title'], 'section-title')}>
              {contacts.homePageContact.data.attributes.title}
            </h2>

            <div className={styles['contacts__row']}>
              <div className={styles['contacts__items']}>
                {contacts.homePageContact.data.attributes.Contacts.map((el) => (
                  <ContactsItem key={el.id} name={el.name} position={el.position} phone={el.phone} email={el.email} />
                ))}
              </div>

              <div className={styles['contacts__map']}>
                <iframe
                  src={contacts.homePageContact.data.attributes.frame_url}
                  width="700"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
