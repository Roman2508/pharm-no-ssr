import React from 'react'
import cn from 'classnames'

import styles from './News.module.scss'
import returnPaginationRange from '@/utils/returnPaginationRange'
import Link from 'next/link'

interface IPaginationProps {
  pagesCount: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<IPaginationProps> = ({ pagesCount, currentPage, setCurrentPage }) => {
  const pagesArray = returnPaginationRange(pagesCount, currentPage)

  const handleChangePage = (page: number | string) => {
    // page !== '...'
    if (typeof page === 'number') {
      setCurrentPage(page)
    }
  }

  return (
    <div className={styles['news__pagination']}>
      <span className={styles['news__pagination-item']} onClick={() => handleChangePage(1)}>
        &#60; Перша
      </span>
      <span
        className={cn(styles['news__pagination-item'], styles['news__pagination-prev'])}
        onClick={() => handleChangePage(currentPage - 1)}>
        &#60; Попередня
      </span>
      <span className={styles['naws__pages']}>
        {pagesArray.map((page, index) => (
          <span
            className={cn(styles['news__pagination-item'], styles['news__pagination-page'], {
              [styles['news__selected-page']]: currentPage === page,
            })}
            key={index}
            onClick={() => handleChangePage(page)}>
            {page}
          </span>
        ))}
      </span>
      <span
        className={cn(styles['news__pagination-item'], styles['news__pagination-next'])}
        onClick={() => handleChangePage(currentPage + 1)}>
        Наступна &#62;
      </span>
      <span className={styles['news__pagination-item']} onClick={() => handleChangePage(pagesCount)}>
        Остання &#62;
      </span>
      <Link className={styles['news__all-news']} href={'/novina'}>
        Всі новини
      </Link>
    </div>
  )
}

export default Pagination
