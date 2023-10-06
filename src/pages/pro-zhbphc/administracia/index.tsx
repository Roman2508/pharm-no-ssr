import React from 'react'

import styles from '../ProZhbphc.module.scss'

import { Layout } from '@/layouts/Layout'
import AdministrationCard from '@/components/AdministrationCard/AdministrationCard'
import { GetStaticProps } from 'next'
import {
  GetAdministrationQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'

interface IAdministrationProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  mainScreenData: GetMainScreenQuery
  administration: GetAdministrationQuery
  headerSchedule: GetHeaderScheduleQuery
}

const Administration: React.FC<IAdministrationProps> = ({
  SEO,
  headerData,
  footerData,
  mainScreenData,
  administration,
  headerSchedule,
}) => {
  return (
    <Layout
      SEO={SEO}
      title="Адміністрація"
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <div className={styles['administration']}>
        <div className="container">
          <div className={`${styles['administration__title']} section-title`}>Адміністрація</div>
          <div className={styles['administration__list']}>
            {administration.workers.data.map((el, index) => (
              <AdministrationCard
                key={index}
                photo={el.attributes.photo.data.attributes.url}
                position={el.attributes.position}
                name={el.attributes.name}
                phone={el.attributes.phone}
                mail={el.attributes.email}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const mainScreenData = await gql.GetMainScreen()
    const administration = await gql.GetAdministration()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        footerData,
        mainScreenData,
        administration,
        headerSchedule,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'about page error')
    return {
      props: { SEO: {}, headerData: {}, footerData: {}, mainScreenData: {}, administration: {}, headerSchedule: {} },
    }
  }
}

export default Administration
