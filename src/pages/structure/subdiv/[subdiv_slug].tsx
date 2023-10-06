import React from 'react'
import cn from 'classnames'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import PageContnet from '@/components/PageContent/PageContnet'
import {
  CycleCommissionEntity,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

interface ISmksPageProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  subdivData: CycleCommissionEntity
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const SmksPage: NextPage<ISmksPageProps> = ({
  SEO,
  headerData,
  footerData,
  subdivData,
  mainScreenData,
  headerSchedule,
}) => {
  if (!SEO || !headerData || !footerData || !subdivData || !mainScreenData || !headerSchedule) {
    return <LoadingSpinner />
  }

  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
      title={subdivData?.attributes?.SEO?.title}
    >
      <h1 className={`${styles['main-title']} section-title`}>{subdivData.attributes.name}</h1>

      {/* {subdivData.attributes.main_photo.data && (
        <div className="container">
          <div className={'main-photo-page'}>
            <img
              src={`${process.env.API_URL}${subdivData.attributes.main_photo.data.attributes.url}`}
              alt="main page photo"
            />
          </div>
        </div>
      )} */}

      <div className={cn(styles['page-conent'])}>
        {String(subdivData.attributes.layout) === 'col_1_8_3' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet colSize="col-1-12" pageComponents={subdivData.attributes.left_sidebar} />
            <PageContnet
              colSize="col-8-12"
              pageComponents={subdivData.attributes.page_components}
              mainPhotoCol={subdivData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-3-12" pageComponents={subdivData.attributes.right_sidebar} />
          </div>
        ) : String(subdivData.attributes.layout) === 'col_2_7_4' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet colSize="col-2-12" pageComponents={subdivData.attributes.left_sidebar} />
            <PageContnet
              colSize="col-7-12"
              pageComponents={subdivData.attributes.page_components}
              mainPhotoCol={subdivData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-4-12" pageComponents={subdivData.attributes.right_sidebar} />
          </div>
        ) : String(subdivData.attributes.layout) === 'col_8_4' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet
              colSize="col-8-12"
              pageComponents={subdivData.attributes.page_components}
              mainPhotoCol={subdivData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-4-12" pageComponents={subdivData.attributes.right_sidebar} />
          </div>
        ) : String(subdivData.attributes.layout) === 'col_9_3' ? (
          <div className={cn('page-row', 'container')}>
            <PageContnet
              colSize="col-9-12"
              pageComponents={subdivData.attributes.page_components}
              mainPhotoCol={subdivData.attributes.main_photo.data}
            />
            <PageContnet colSize="col-3-12" pageComponents={subdivData.attributes.right_sidebar} />
          </div>
        ) : (
          <PageContnet colSize="col-12" pageComponents={subdivData.attributes.page_components} />
        )}
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const cmks = await gql.GetAllSubdivisionSlug()

    if (!cmks.subdivisions.data.length) {
      return {
        paths: [],
        fallback: true,
      }
    }

    const paths = cmks.subdivisions.data.map((el) => ({ params: { subdiv_slug: el.attributes.slug } }))

    return {
      paths,
      fallback: true,
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [],
      fallback: true,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const returnData = {
      props: { SEO: {}, headerData: {}, mainScreenData: {}, subdivData: {}, headerSchedule: {} },
      redirect: { destination: '/404', permanent: true },
    }

    if (!params || !params.subdiv_slug) {
      return returnData
    }

    const subdivData = await gql.GetSubdiv({ subdivSlug: `${params.subdiv_slug}` })

    if (!subdivData || !subdivData.subdivisions.data[0]) {
      return returnData
    }

    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    if (
      !headerData ||
      !mainScreenData ||
      !footerData ||
      !SEO.seo.data.attributes.SEO.length ||
      !headerSchedule.groups.data.length ||
      !headerSchedule.workers.data.length
    ) {
      return returnData
    }

    return {
      props: {
        SEO,
        headerData,
        footerData,
        headerSchedule,
        mainScreenData,
        subdivData: subdivData.subdivisions.data[0],
      },
    }
  } catch (error) {
    console.log(error, 'subdiv page error')
    return {
      props: { SEO: {}, headerData: {}, footerData: {}, mainScreenData: {}, subdivData: {}, headerSchedule: {} },
      redirect: { destination: '/404', permanent: true },
    }
  }
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
//     if (!params || !params.subdiv_slug) {
//       return {
//         props: { headerData: {}, mainScreenData: {}, subdivData: {} },
//         redirect: { destination: '/404', permanent: true },
//       }
//     }

//     const subdivData = await gql.GetSubdiv({ subdivSlug: `${params.subdiv_slug}` })

//     if (!subdivData.subdivisions.data[0]) {
//       return {
//         props: { headerData: {}, mainScreenData: {}, subdivData: {} },
//         redirect: { destination: '/404', permanent: true },
//       }
//     }

//     const SEO = await gql.GetSEO()
//     const headerData = await gql.GetHeader()
//     const mainScreenData = await gql.GetMainScreen()

//     return {
//       props: {
//         SEO,
//         headerData,
//         mainScreenData,
//         subdivData: subdivData.subdivisions.data[0],
//       },
//     }
//   } catch (error) {
//     console.log(error, 'subdiv page error')
//     return { props: { SEO: {}, headerData: {}, mainScreenData: {}, subdivData: {} } }
//   }
// }

export default SmksPage
