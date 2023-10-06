import React from 'react'
import { NextPage } from 'next'

import { Layout } from '@/layouts/Layout'
import styles from '../Structure.module.scss'
import PageCard from '@/components/PageCard/PageCard'
import { GetAllCycleCommissionsQuery, gql } from '@/graphql/client'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

const SmksPage: NextPage = () => {
  const [cmkList, setCmkList] = React.useState<GetAllCycleCommissionsQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const cmkList = await gql.GetAllCycleCommissions()
      setCmkList(cmkList)
    }

    fetchData()
  }, [])

  return (
    <Layout title="Циклові комісії">
      <h1 className={`${styles['main-title']} section-title`}>Циклові комісії</h1>

      <div className="container">
        {cmkList ? (
          <div className={styles['smk-list']}>
            {cmkList.cycleCommissions.data.map((el) => (
              <PageCard
                id={el.id}
                department={'cmks'}
                slug={el.attributes.slug}
                photo={el.attributes.main_photo.data[0].attributes.url}
                name={el.attributes.name}
              />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </Layout>
  )
}

export default SmksPage
