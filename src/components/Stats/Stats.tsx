import React from 'react'
import { gql } from '@/graphql/client'
import styles from './Stats.module.scss'
import { GetHomePageStatQuery } from '@/graphql/__generated__'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const Stats: React.FC = () => {
  const [data, setData] = React.useState<GetHomePageStatQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await gql.GetHomePageStat()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className={styles['stats']}>
      <div className={'container'}>
        <div className={styles['stats__inner']}>
          {data ? (
            data.homePageStat.data.attributes.stats.map((el) => (
              <div className={styles['stats__item']} key={el.id}>
                <div className={styles['stats__item-inner']}>
                  <h3 className={styles['stats__number']}>{el.num}</h3>
                  <p className={styles['stats__text']}>{el.text}</p>
                </div>
              </div>
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  )
}

export default Stats
