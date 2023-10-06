import React from 'react'
import cn from 'classnames'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import {
  gql,
  GetSeoQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  CycleCommissionEntity,
  GetHeaderScheduleQuery,
  GetFooterQuery,
  GetCycleCommissionQuery,
} from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from '../../Structure.module.scss'
import PageContnet from '@/components/PageContent/PageContnet'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import { useRouter } from 'next/router'

const SmksPage: NextPage = () => {
  const { query } = useRouter()

  const [cmkData, setCmkData] = React.useState<CycleCommissionEntity>()

  React.useEffect(() => {
    if (!query.smks_slug) return

    const fetchData = async () => {
      try {
        const cmkData = await gql.GetCycleCommission({ pageUrl: `/${query.smks_slug}` })
        // @ts-ignore
        setCmkData(cmkData.cycleCommissions.data[0])
      } catch (err) {
        console.log(err, 'cmk error')
        window.location.replace('/404')
      }
    }
    fetchData()
  }, [])

  return (
    <Layout title={cmkData ? cmkData.attributes.SEO.title : ''}>
      {cmkData && <h1 className={`${styles['main-title']} section-title`}>{cmkData.attributes.name}</h1>}

      {cmkData ? (
        <div className={cn(styles['page-conent'])}>
          {String(cmkData.attributes.layout) === 'col_1_8_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-1-12" pageComponents={cmkData.attributes.left_sidebar} />
              <PageContnet
                colSize="col-8-12"
                pageComponents={cmkData.attributes.page_components}
                mainPhotoCol={cmkData.attributes.main_photo.data}
                cmkHead={cmkData.attributes.headOfCommission.data.attributes}
                cmkTeachers={cmkData.attributes.workers.data}
                cmkSlug={cmkData.attributes.slug}
              />
              <PageContnet colSize="col-3-12" pageComponents={cmkData.attributes.right_sidebar} />
            </div>
          ) : String(cmkData.attributes.layout) === 'col_2_7_4' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet colSize="col-2-12" pageComponents={cmkData.attributes.left_sidebar} />
              <PageContnet
                colSize="col-7-12"
                pageComponents={cmkData.attributes.page_components}
                mainPhotoCol={cmkData.attributes.main_photo.data}
              />
              <PageContnet
                colSize="col-4-12"
                pageComponents={cmkData.attributes.right_sidebar}
                cmkHead={cmkData.attributes.headOfCommission.data.attributes}
                cmkTeachers={cmkData.attributes.workers.data}
                cmkSlug={cmkData.attributes.slug}
              />
            </div>
          ) : String(cmkData.attributes.layout) === 'col_8_4' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet
                colSize="col-8-12"
                pageComponents={cmkData.attributes.page_components}
                mainPhotoCol={cmkData.attributes.main_photo.data}
              />
              <PageContnet
                colSize="col-4-12"
                pageComponents={cmkData.attributes.right_sidebar}
                cmkHead={cmkData.attributes.headOfCommission.data.attributes}
                cmkTeachers={cmkData.attributes.workers.data}
                cmkSlug={cmkData.attributes.slug}
              />
            </div>
          ) : String(cmkData.attributes.layout) === 'col_9_3' ? (
            <div className={cn('page-row', 'container')}>
              <PageContnet
                colSize="col-9-12"
                pageComponents={cmkData.attributes.page_components}
                mainPhotoCol={cmkData.attributes.main_photo.data}
              />
              <PageContnet
                colSize="col-3-12"
                pageComponents={cmkData.attributes.right_sidebar}
                cmkHead={cmkData.attributes.headOfCommission.data.attributes}
                cmkTeachers={cmkData.attributes.workers.data}
                cmkSlug={cmkData.attributes.slug}
              />
            </div>
          ) : (
            <PageContnet colSize="col-12" pageComponents={cmkData.attributes.page_components} />
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  )
}

export default SmksPage
