import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import { gql } from '@/graphql/client'
import styles from './Gallery.module.scss'
import { GetHomePageGalleryQuery } from '@/graphql/__generated__'

export const Gallery: React.FC = () => {
  const [data, setData] = React.useState<GetHomePageGalleryQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await gql.GetHomePageGallery()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles['gallery']}>
      <h2 className={cn(styles['gallery__title'], 'section-title')}>{data?.homePageGallery.data.attributes.title}</h2>

      <div className="container">
        {data && (
          <div className={styles['gallery__content']}>
            <div className={styles['gallery__col']}>
              {data.homePageGallery.data.attributes.GalleryItems.slice(0, 2).map((el) => (
                <a className={styles['gallery__item']} target="_blank" href={el.link} key={el.id}>
                  <Image
                    width={400}
                    height={400}
                    className={styles['gallery__item-img']}
                    src={`${process.env.API_URL}${el.photo.data.attributes ? el.photo.data.attributes.url : ''}`}
                    alt="event"
                  />
                  <h4 className={styles['gallery__item-title']}>{el.title}</h4>
                </a>
              ))}
            </div>

            <div className={styles['gallery__col']}>
              {data.homePageGallery.data.attributes.GalleryItems.slice(2, 4).map((el) => (
                <a className={styles['gallery__item']} target="_blank" href={el.link} key={el.id}>
                  <Image
                    width={400}
                    height={400}
                    className={styles['gallery__item-img']}
                    src={`${process.env.API_URL}${el.photo.data.attributes ? el.photo.data.attributes.url : ''}`}
                    alt="event"
                  />
                  <h4 className={styles['gallery__item-title']}>{el.title}</h4>
                </a>
              ))}
            </div>

            <div className={styles['gallery__col']}>
              <a
                className={styles['gallery__item-large']}
                target="_blank"
                href={data.homePageGallery.data.attributes.GalleryItems[4].link}
              >
                <Image
                  width={828}
                  height={466}
                  className={styles['gallery__item-img']}
                  src={`${process.env.API_URL}${data.homePageGallery.data.attributes.GalleryItems[4].photo.data.attributes.url}`}
                  alt="event"
                />
                <h4 className={styles['gallery__item-title']}>
                  {data?.homePageGallery.data.attributes.GalleryItems[4].title}
                </h4>
              </a>
            </div>

            <div className={cn(styles['gallery__col'], 'gallery__col--last-col')}>
              {data.homePageGallery.data.attributes.GalleryItems.slice(5, 7).map((el) => (
                <a className={styles['gallery__item']} target="_blank" href={el.link} key={el.id}>
                  <Image
                    width={400}
                    height={400}
                    className={styles['gallery__item-img']}
                    src={`${process.env.API_URL}${el.photo.data.attributes ? el.photo.data.attributes.url : ''}`}
                    alt="event"
                  />
                  <h4 className={styles['gallery__item-title']}>{el.title}</h4>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
