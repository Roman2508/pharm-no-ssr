import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Header.module.scss'
import HeaderNavigation from './HeaderNavigation'
import { GetHeaderScheduleQuery, HeaderEntityResponse } from '@/graphql/__generated__'

// GET header data
// http://localhost:1337/api/header?populate%5B0%5D=Header&populate%5B1%5D=Header.navigation&populate%5B2%5D=Header.navigation.submenu&populate%5B3%5D=Header.navigation.submenu.submenu&populate%5B4%5D=Header.logo&populate%5B5%5D=Header.background&populate%5B6%5D=Header.videoPoster&populate%5B7%5D=Header.social&populate%5B8%5D=Header.social.icons&populate%5B9%5D=Header.social.icons.icon&populate%5B10%5D=Header.headerIcons&populate%5B11%5D=Header.headerIcons.icon

interface IHeaderProps {
  headerData: HeaderEntityResponse
  headerSchedule: GetHeaderScheduleQuery
}

const Header: React.FC<IHeaderProps> = ({ headerData, headerSchedule }) => {
  const [stickyClass, setStickyClass] = React.useState<'header--static' | 'header--sticky'>('header--static')

  const isSticky = () => {
    const scrollTop = window.scrollY
    const stickyClass = scrollTop >= 82 ? 'header--sticky' : 'header--static'
    setStickyClass(stickyClass)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  return (
    <header className={styles['header']}>
      <div className={'container'}>
        <div className={styles['header__top']}>
          {/* HEADER ICONS */}

          <div className={styles['header__left-col']}>
            {headerData.data.attributes.Header.headerIcons.slice(0, 2).map((icon) => {
              return (
                <Link className={styles['header__top-link']} href={icon.link} key={icon.id} target="_blank">
                  <Image
                    src={`${process.env.API_URL}${icon.icon.data.attributes.url}`}
                    alt="icon"
                    width={40}
                    height={40}
                  />
                  <span className={styles['header__top-link-title']}>{icon.text}</span>
                </Link>
              )
            })}
          </div>

          <Link
            className={styles['header__top-link']}
            href={headerData.data.attributes.Header.headerIcons[2].link}
            target="_blank"
          >
            <Image
              src={`${process.env.API_URL}${headerData.data.attributes.Header.headerIcons[2].icon.data.attributes.url}`}
              alt="ENG icon"
              width={35}
              height={26}
            />
            <span className={styles['header__eng-title']}>{headerData.data.attributes.Header.headerIcons[2].text}</span>
          </Link>

          {/* HEADER SOCIAL */}

          <div className={styles['social__wrapper']}>
            <p>{headerData.data.attributes.Header.social.text}</p>
            <ul className={styles['social__list']}>
              {headerData.data.attributes.Header.social.icons.map((el) => (
                <li className={styles['social__list-item']} key={el.id}>
                  <Link href={el.link} target="_blank">
                    <Image
                      className={styles['social__list-icon']}
                      src={`${process.env.API_URL}${el.icon.data.attributes.url}`}
                      alt="social icon"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HEADER NAVIGATION */}

        <HeaderNavigation headerData={headerData} stickyClass={stickyClass} headerSchedule={headerSchedule} />
      </div>
    </header>
  )
}

export default Header
