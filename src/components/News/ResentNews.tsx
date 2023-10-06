import React from 'react'
import Link from 'next/link'

import styles from './News.module.scss'
import convertMonthName from '@/utils/convertMonthName'
import { GetSomeLastNewsQuery } from '@/graphql/__generated__'

interface IResentNewsProps {
  resentNews: GetSomeLastNewsQuery
}

export const ResentNews: React.FC<IResentNewsProps> = ({ resentNews }) => {
  return (
    <>
      {resentNews.novinas.data.map((el) => {
        const { day, month, year } = convertMonthName(el.attributes.date)
        const newsLink = el.attributes.date.split('-')

        return (
          <div className={styles['resent-news__item']} key={el.id}>
            <Link
              className={styles['resent-news__content']}
              href={`/novina/${newsLink[0]}/${newsLink[1]}/${newsLink[2]}/${el.id}`}
            >
              <h4 className={styles['resent-news__title']}>
                <span className="underline-animation"> {el.attributes.title} </span>
              </h4>

              <p className={styles['resent-news__date']}>{`${day} ${month} ${year}`}</p>
            </Link>
          </div>
        )
      })}
    </>
  )
}
