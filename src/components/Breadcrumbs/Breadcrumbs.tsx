'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import styles from './Breadcrumbs.module.scss'
import Link from 'next/link'

const Breadcrumbs = () => {
  const pathname = usePathname()

  let currentLink = ''

  const crumbs = (pathname || '')
    .split('/')
    .filter((el) => el !== '')
    .map((el, index) => {
      currentLink += `/${el}`
      return (
        <React.Fragment key={el}>
          {index !== 0 && <span>&#62;</span>}
          <div className={styles['breadcrumbs__item']}>
            <Link href={currentLink}>{el}</Link>
          </div>
        </React.Fragment>
      )
    })

  return (
    <div className={styles['breadcrumbs']}>
      <div className={styles['breadcrumbs-container']}>
        <div className={styles['breadcrumbs__list']}>{crumbs}</div>
      </div>
    </div>
  )
}

export default Breadcrumbs
