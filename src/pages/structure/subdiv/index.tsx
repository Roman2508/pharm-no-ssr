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
  SubdivisionEntity,
  gql,
} from '@/graphql/client'
import PageCard from '@/components/PageCard/PageCard'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

interface SubdivPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  subdivList: SubdivisionEntity[]
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const SubdivPage: NextPage<SubdivPageProps> = ({
  SEO,
  footerData,
  headerData,
  subdivList,
  mainScreenData,
  headerSchedule,
}) => {
  if (!SEO || !footerData || !headerData || !subdivList || !mainScreenData || !headerSchedule) {
    return <LoadingSpinner />
  }

  return (
    <Layout
      SEO={SEO}
      title={'Підрозділи'}
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <h1 className={`${styles['main-title']} section-title`}>Підрозділи</h1>

      <div className="container">
        <div className={styles['smk-list']}>
          {subdivList.map((el) => (
            <PageCard
              id={el.id}
              department={'subdiv'}
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
    const subdivList = await gql.GetAllSubdivision()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        footerData,
        mainScreenData,
        headerSchedule,
        subdivList: subdivList.subdivisions.data,
      },
    }
  } catch (error) {
    console.log(error, 'subdiv page error')
    return { props: { SEO: {}, footerData: {}, headerData: {}, mainScreenData: {}, cmkData: {}, headerSchedule: {} } }
  }
}

export default SubdivPage
