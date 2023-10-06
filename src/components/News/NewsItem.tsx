import React from 'react'

import styles from './News.module.scss'
import convertMonthName from '@/utils/convertMonthName'
import Link from 'next/link'
import Image from 'next/image'

interface INewsItemProps {
  id: string
  title: string
  mainPhoto: string
  date: string
  body: string
  videoUrl: string
  photosForCollage: any
}

export const NewsItem: React.FC<INewsItemProps> = ({ id, title, mainPhoto, date, body, photosForCollage }) => {
  const { day, month, year } = convertMonthName(date)

  const dateArray = date.split('-')

  const newsUrl = `/novina/${dateArray[0]}/${dateArray[1]}/${dateArray[2]}/${id}`

  return (
    <div className={styles['news__item']}>
      <div className={styles['news__img-wrapper']}>
        <p className={styles['news__item-date']}>
          <span>{day}</span>
          <span>{month}</span>
          <span>{year}</span>
        </p>
        <Link href={newsUrl}>
          <Image
            className={styles['news__item-img']}
            src={`${process.env.API_URL}${mainPhoto}`}
            width={300}
            height={200}
            alt="news"
          />
        </Link>
      </div>
      <div className={styles['news__item-col']}>
        <div className={styles['news__item-content']}>
          <h4 className={styles['news__item-title']}>
            <Link href={newsUrl}>
              <span className={styles['underline-animation']}>{title}</span>
            </Link>
          </h4>
          <div className={styles['news__item-text']} dangerouslySetInnerHTML={{ __html: body }} />
        </div>
        <div className={styles['news__read-more']}>
          <div className={styles['news__read-more-icon']}>
            <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53 24.4286L3 24.4286M53 24.4286L31.5714 3.00004M53 24.4286L31.5714 45.8572"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Link href={newsUrl}>
            <p className={styles['news__read-more-text']}>Читати далі</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
