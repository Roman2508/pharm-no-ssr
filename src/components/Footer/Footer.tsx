import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

import Form from '../Form/Form'
import Modal from '../Modal/Modal'
import styles from './Footer.module.scss'
import { FooterEntityResponse, GetFooterQuery } from '@/graphql/__generated__'
import { clearPhoneNumber } from '@/utils/clearPhoneNumber'

interface IFooterProps {
  footerData: FooterEntityResponse
}

export const Footer: React.FC<IFooterProps> = ({ footerData }) => {
  const [isShow, setIsShow] = React.useState(false)
  const [isAnonimForm, setIsAnonimForm] = React.useState(false)

  if (!footerData) {
    return
  }

  const mainPhone = clearPhoneNumber(footerData.data.attributes.main_phone)
  const secondaryPhone = clearPhoneNumber(footerData.data.attributes.secondary_phone)

  const defaultFormOpen = () => {
    setIsAnonimForm(false)
    setIsShow(true)
  }
  const anonimFormOpen = () => {
    setIsAnonimForm(true)
    setIsShow(true)
  }

  return (
    <>
      <Modal
        isShow={isShow}
        setIsShow={setIsShow}
        modalTitle={isAnonimForm ? 'Напишіть нам' : 'Скринька довіри'}
        classNames={styles['footer-modal']}
      >
        <Form isAnonim={isAnonimForm} />
      </Modal>

      <footer className={styles['footer']}>
        <svg height="80px" viewBox="0 0 1440 181" preserveAspectRatio="none" className={styles['footer--decor']}>
          <path
            d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"
            fill="#FFF"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
          ></path>
        </svg>

        <div className="container">
          <div className={styles['footer__wrapper']}>
            <div className={styles['footer__left-col']}>
              <div className={styles['footer__map']}>
                <a href={footerData.data.attributes.map_url}>
                  <Image
                    className={styles['social__list-icon']}
                    src={`${process.env.API_URL}${footerData.data.attributes.map_photo.data.attributes.url}`}
                    alt="logo"
                    width={150}
                    height={100}
                  />
                </a>
              </div>

              <div className={styles['footer__address']}>
                <h6>{footerData.data.attributes.title}</h6>
                <div dangerouslySetInnerHTML={{ __html: footerData.data.attributes.address }} />
                {/* <p>вул. Чуднівська, 99</p>
                <p>м. Житомир</p>
                <p>10005 Україна</p> */}
              </div>
            </div>

            <a className={styles['footer__logo']} href="/">
              <Image
                className={styles['social__list-icon']}
                src={`${process.env.API_URL}${footerData.data.attributes.logo.data.attributes.url}`}
                alt="logo"
                width={140}
                height={140}
              />
            </a>

            <div className={styles['footer__right-col']}>
              <div className={styles['footer__info']}>
                <ul className={styles['social__list']}>
                  {footerData.data.attributes.social.map((el) => (
                    <li className={styles['social__list-item']} key={el.id}>
                      <a href="#">
                        <Image
                          className={styles['social__list-icon']}
                          src={`${process.env.API_URL}${el.icon.data.attributes.url}`}
                          alt="social icon"
                          width={20}
                          height={20}
                        />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className={styles['footer__contacts']}>
                  <a href={`tel:${mainPhone}`}>Тел: {footerData.data.attributes.main_phone}</a>
                  <a href={`tel:${secondaryPhone}`}>Тел: {footerData.data.attributes.secondary_phone}</a>
                  <a href={`mailto:${footerData.data.attributes.email}`}>{footerData.data.attributes.email}</a>
                </div>
              </div>

              <div className={styles['footer__buttons']}>
                <button className={cn(styles['footer__button'], styles['footer__button-1'])} onClick={anonimFormOpen}>
                  Задати питання
                </button>
                <button className={cn(styles['footer__button'], styles['footer__button-2'])} onClick={defaultFormOpen}>
                  Скринька довірии
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['footer__copyright']}>{footerData.data.attributes.copyright}</div>
      </footer>
    </>
  )
}
