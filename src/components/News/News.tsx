import React from 'react'
import cn from 'classnames'

import { NewsItem } from './NewsItem'
import Pagination from './Pagination'
import { gql } from '@/graphql/client'
import styles from './News.module.scss'
import { NovinaEntity } from '@/graphql/__generated__'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

interface INewsProps {
  showTitle?: boolean
  pageSize?: number
  addMarginBottom?: boolean
}

export const News: React.FC<INewsProps> = ({ showTitle, pageSize = 3, addMarginBottom = false }) => {
  const firstRender = React.useRef(false)

  const [news, setNews] = React.useState<NovinaEntity[]>([])
  const [pagesCount, setPagesCount] = React.useState(1)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      const newsData = await gql.GetNews()
      // @ts-ignore
      setNews(newsData.novinas.data)
      setPagesCount(newsData.novinas.meta.pagination.pageCount)
    }

    fetchData()
  }, [])

  React.useEffect(() => {
    if (firstRender.current) {
      const fetchNewsItems = async () => {
        try {
          setIsLoading(true)
          const data = await gql.GetNews({ currentPage, pageSize })
          // @ts-ignore
          setNews(data.novinas.data)
        } catch (error) {
          alert('Помилка при отриманні даних!')
        } finally {
          setIsLoading(false)
        }
      }
      fetchNewsItems()
    } else {
      firstRender.current = true
    }
  }, [currentPage])

  return (
    <div
      className={cn(styles['news'], {
        [styles['news--indent']]: addMarginBottom,
      })}
    >
      <div className={styles['news__inner']}>
        {showTitle && <h2 className={cn(styles['news__title'], 'section-title')}>Новини</h2>}
        <div
          className={cn(styles['news__items'], {
            [styles['news__items--loading']]: isLoading,
          })}
        >
          {news.length ? (
            news.map((news) => (
              <NewsItem
                key={news.id}
                id={news.id}
                title={news.attributes.title}
                body={news.attributes.body}
                date={news.attributes.date}
                mainPhoto={news.attributes.main_photo.data.attributes.url}
                photosForCollage={news.attributes.collage_photos.data}
                videoUrl={news.attributes.video_url}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>

        {isLoading && <LoadingSpinner />}

        <Pagination pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}
