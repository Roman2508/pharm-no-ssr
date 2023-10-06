import React from 'react'
import cn from 'classnames'

import styles from './Partners.module.scss'
import { GetPartnersQuery } from '@/graphql/__generated__'
import PartnerItems from './PartnerItems'
import { gql } from '@/graphql/client'

export const Partners: React.FC = () => {
  const [partners, setPartners] = React.useState<GetPartnersQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await gql.GetPartners()
      setPartners(data)
    }

    fetchData()
  }, [])

  return (
    <div className={styles['partners']}>
      <h2 className={cn(styles['partners__title'], 'section-title')}>Наші партнери</h2>
      <p className={styles['partners__descr']}>
        Ми співпрацюємо з багатьма закладами освіти та роботодавцями. Завжди відкриті для нових пропозицій
      </p>

      {partners && <PartnerItems partners={partners} />}
    </div>
  )
}
