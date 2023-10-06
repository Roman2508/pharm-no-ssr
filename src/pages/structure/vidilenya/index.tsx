import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import {
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  VidilenyaEntity,
  gql,
} from '@/graphql/client'
import PageCard from '@/components/PageCard/PageCard'

interface ViddilenyaPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  vidilenyaList: VidilenyaEntity[]
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const ViddilenyaPage: NextPage<ViddilenyaPageProps> = ({
  SEO,
  headerData,
  footerData,
  vidilenyaList,
  mainScreenData,
  headerSchedule,
}) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      title={'Відділення'}
      headerSchedule={headerSchedule}
    >
      <h1 className={`${styles['main-title']} section-title`}>Відділення</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {vidilenyaList.map((el) => (
            <PageCard
              id={el.id}
              department={'vidilenya'}
              slug={el.attributes.slug}
              photo={el.attributes.main_photo.data[0].attributes.url}
              name={el.attributes.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const mainScreenData = await gql.GetMainScreen()
    const vidilenyaList = await gql.GetAllVidilenyas()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        footerData,
        mainScreenData,
        headerSchedule,
        vidilenyaList: vidilenyaList.vidilenyas.data,
      },
    }
  } catch (error) {
    console.log(error, 'viddilenya page error')
    return { props: { SEO: {}, footerData: {}, headerData: {}, mainScreenData: {}, cmkData: {}, headerSchedule: {} } }
  }
}

export default ViddilenyaPage
