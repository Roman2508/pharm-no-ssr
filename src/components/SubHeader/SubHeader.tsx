import React from 'react'
import Image from 'next/image'

import styles from './SubHeader.module.scss'
import logoIcon from '../../../public/assets/icons/logo_white.svg'
import Link from 'next/link'
import { GetMainScreenQuery } from '@/graphql/__generated__'

interface ISubHeaderProps {
  mainScreenData: GetMainScreenQuery
}

const SubHeader: React.FC<ISubHeaderProps> = ({ mainScreenData }) => {
  const logo = mainScreenData?.header?.data?.attributes?.Header?.logo?.data?.attributes?.url
    ? `${process.env.API_URL}${mainScreenData.header?.data?.attributes?.Header?.logo?.data?.attributes?.url}`
    : ''

  return (
    <div className={styles['sub-header']}>
      <div className={styles['sub-header__video']}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            background: `transparent url('${process.env.API_URL}${mainScreenData?.header?.data?.attributes?.Header.secondaryVideoPoster.data.attributes.url}') 50% 50% / cover no-repeat`,
          }}
        >
          <source
            src={`${process.env.API_URL}${mainScreenData?.header?.data?.attributes?.Header?.background?.data?.attributes?.url}`}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container">
        <div className={styles['sub-header__inner']}>
          <Link className={styles['sub-header__logo-box']} href="/">
            {logo && (
              <Image className={styles['sub-header__logo']} src={logo} alt="cloud icon" width={140} height={140} />
            )}
          </Link>
          <h1 className={styles['sub-header__title']}>{mainScreenData?.header?.data?.attributes?.Header?.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
