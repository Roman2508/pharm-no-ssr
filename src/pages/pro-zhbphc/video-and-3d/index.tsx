import React from 'react'
import Image from 'next/image'
import { GetStaticProps, NextPage } from 'next'

import {
  GetAllVideosQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetPanoramsQuery,
  GetSeoQuery,
} from '@/graphql/__generated__'
import { gql } from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from './VideoAnd3d.module.scss'
import { Videos } from '@/components/Videos/Videos'
import FullScreenFrame from '@/components/FullScreenFrame/FullScreenFrame'

interface IMTBazaPageProps {
  SEO: GetSeoQuery
  videos: GetAllVideosQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  panoramas: GetPanoramsQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const VideoAnd3d: NextPage<IMTBazaPageProps> = ({
  SEO,
  videos,
  panoramas,
  headerData,
  footerData,
  mainScreenData,
  headerSchedule,
}) => {
  const [isOpenFullScreen, setOpenFullScreen] = React.useState(false)
  const [frameUrl, setFrameUrl] = React.useState('')

  const handleOpenFullScreenFrame = (url: string) => {
    console.log(url)
    setFrameUrl(url)
    setOpenFullScreen(true)
  }

  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      footerData={footerData}
      title="Відео і 3D-панорами"
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <FullScreenFrame isOpenFullScreen={isOpenFullScreen} setOpenFullScreen={setOpenFullScreen}>
        <iframe frameBorder="0" width="90%" height="90%" src={frameUrl} allowFullScreen />
      </FullScreenFrame>

      <div className={styles['subdivisions']}>
        <h1 className="section-title" style={{ marginBottom: '50px' }}>
          Відео і 3D-панорами
        </h1>

        <div className="container">
          <div className={styles['card__wrapper']}>
            {panoramas.panoramas.data.map((el) => (
              <div
                className={styles['card__item']}
                key={el.id}
                onClick={() => handleOpenFullScreenFrame(el.attributes.link)}
              >
                <div className="scale-photo-hover scale-icon">
                  <Image
                    className={styles['photo-element']}
                    src={`${process.env.API_URL}${el.attributes.poster.data.attributes.url}`}
                    alt={el.attributes.poster.data.attributes.name}
                    width={el.attributes.poster.data.attributes.width}
                    height={el.attributes.poster.data.attributes.height}
                  />
                </div>
                <div className={styles['card__text-box']}>
                  <p className={styles['card__text']}>{el.attributes.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Videos test videos={videos} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const videos = await gql.GetAllVideos()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const panoramas = await gql.GetPanorams()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        videos,
        panoramas,
        headerData,
        footerData,
        headerSchedule,
        mainScreenData,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return {
      props: {
        SEO: {},
        videos: {},
        panoramas: {},
        headerData: {},
        footerData: {},
        mainScreenData: {},
        headerSchedule: {},
      },
    }
  }
}

export default VideoAnd3d
