import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Header.module.scss'
import logoIcon from '../../../public/assets/icons/logo.png'
import closeIcon from '../../../public/assets/icons/close.svg'
import burgerIcon from '../../../public/assets/icons/burger.svg'
import { GetHeaderScheduleQuery, HeaderEntityResponse } from '@/graphql/__generated__'

interface IHeaderNavigationProps {
  headerData: HeaderEntityResponse
  headerSchedule: GetHeaderScheduleQuery
  stickyClass: 'header--static' | 'header--sticky'
}

const HeaderNavigation: React.FC<IHeaderNavigationProps> = ({ headerData, stickyClass, headerSchedule }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState(false)
  const [openSubmenuName, setOpenSubmenuName] = React.useState('')
  const [openLoverLevelMenuName, setOpenLoverLevelMenuName] = React.useState('')

  const onCloseMobileMenu = () => {
    setIsOpenMobileMenu(false)
    setOpenSubmenuName('')
    setOpenLoverLevelMenuName('')
  }
  const onOpenMobileMenu = () => {
    setIsOpenMobileMenu(true)
  }

  return (
    <nav className={cn(styles['header__nav'], styles[stickyClass])}>
      <div className={styles['header__nav-mobile']}>
        <Link className={styles['header__nav-mobile-logo']} href={'/'}>
          <Image src={logoIcon} alt="mobile logo icon" width={150} height={150} />
        </Link>

        <div className={styles['header__nav-mobile-burger']} onClick={onOpenMobileMenu}>
          <span>Меню</span>

          <Image src={burgerIcon} alt="burger icon" width={30} />
        </div>
      </div>

      <ul className={`${styles['header__nav-list']} ${isOpenMobileMenu ? styles['header__nav--open'] : ''}`}>
        <li className={styles['header__nav-list-main']}>
          <span> Меню </span>
          <Image onClick={onCloseMobileMenu} src={closeIcon} alt="close icon" width={30} />
        </li>

        {headerData.data.attributes.Header.navigation.map((mainEl, MainMenuIndex) => (
          <li key={mainEl.text} className={styles['header__nav-item']}>
            <Link href={mainEl.link} onClick={onCloseMobileMenu}>
              {mainEl.text}
            </Link>

            {mainEl.submenu.length > 0 && (
              <div className={styles['main-menu-triangle']} onClick={() => setOpenSubmenuName(mainEl.text)}>
                <svg viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.8809 43.8807L0.880859 87.1819V0.579391L75.8809 43.8807Z" fill="white" />
                </svg>
              </div>
            )}

            {mainEl.submenu.length > 0 && (
              <ul
                className={cn(styles['header__nav-submenu'], {
                  [styles['header__nav-submenu--open']]: openSubmenuName === mainEl.text,
                })}
              >
                <li className={styles['header__nav-list-back']} onClick={() => setOpenSubmenuName('')}>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                      fill="#ffffff"
                    />
                  </svg>
                  <span> {openSubmenuName} </span>
                </li>

                {mainEl.submenu.map((submenuEl) => (
                  <li key={submenuEl.text} className={styles['header__nav-submenu-item']}>
                    <Link
                      href={submenuEl.link}
                      className={styles['header__nav-submenu-link']}
                      onClick={onCloseMobileMenu}
                    >
                      {submenuEl.text}
                    </Link>

                    {submenuEl.submenu.length > 0 && (
                      <>
                        <div
                          className={styles['main-menu-triangle']}
                          onClick={() => setOpenLoverLevelMenuName(submenuEl.text)}
                        >
                          <svg viewBox="0 0 76 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75.8809 43.8807L0.880859 87.1819V0.579391L75.8809 43.8807Z" fill="white" />
                          </svg>
                        </div>

                        <ul
                          className={cn(styles['header__nav-submenu'], {
                            [styles['header__nav-submenu-reverse']]:
                              MainMenuIndex + 1 === headerData.data.attributes.Header.navigation.length,
                            [styles['header__nav-submenu-lover-level--open']]:
                              openLoverLevelMenuName === submenuEl.text,
                          })}
                        >
                          <li className={styles['header__nav-list-back']} onClick={() => setOpenLoverLevelMenuName('')}>
                            <svg
                              width="30px"
                              height="30px"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                                fill="#ffffff"
                              />
                            </svg>
                            <span> {openLoverLevelMenuName} </span>
                          </li>

                          {submenuEl.text === 'Викладач'
                            ? headerSchedule?.workers?.data.map((el, i) => {
                                const teacherName = el.attributes.name.split(' ').filter((el) => el !== '')

                                return (
                                  <li
                                    className={styles['header__nav-submenu-item']}
                                    key={el.attributes.slug}
                                    onClick={onCloseMobileMenu}
                                  >
                                    <Link
                                      className={styles['header__nav-submenu-link']}
                                      href={`/rozklad/vikladach/${el.attributes.slug}`}
                                    >
                                      {`${teacherName[0]} ${teacherName[1][0]}.${teacherName[2][0]}.`}
                                    </Link>
                                  </li>
                                )
                              })
                            : submenuEl.text === 'Група'
                            ? headerSchedule?.groups?.data.map((el, i) => {
                                return (
                                  <li
                                    className={styles['header__nav-submenu-item']}
                                    key={el.attributes.name}
                                    onClick={onCloseMobileMenu}
                                  >
                                    <Link
                                      className={styles['header__nav-submenu-link']}
                                      href={`/rozklad/grupa/${el.attributes.name}`}
                                    >
                                      {el.attributes.name}
                                    </Link>
                                  </li>
                                )
                              })
                            : submenuEl.submenu.map((el, i) => {
                                return (
                                  <li
                                    className={styles['header__nav-submenu-item']}
                                    key={i}
                                    onClick={onCloseMobileMenu}
                                  >
                                    <Link className={styles['header__nav-submenu-link']} href={el.link}>
                                      {el.text}
                                    </Link>
                                  </li>
                                )
                              })}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavigation
