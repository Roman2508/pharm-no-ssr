// @ts-nocheck

import React from 'react'
import cn from 'classnames'

import styles from './Partners.module.scss'
import { GetPartnersQuery } from '@/graphql/__generated__'
import PartnerItem from './PartnerItem'

interface IPartnerItemsProps {
  partners: GetPartnersQuery
}

const PartnerItems: React.FC<IPartnerItemsProps> = ({ partners }) => {
  const arraySize = Math.ceil(partners.partners.data.length / 4)
  const slicedArray = []

  for (let i = 0; i < partners.partners.data.length; i += arraySize) {
    slicedArray.push(partners.partners.data.slice(i, i + arraySize))
  }

  return (
    <>
      <div className={styles['partners__items-wrap']}>
        <div className={cn(styles['partners__items'], styles['marquee'])}>
          {slicedArray[0].map((partner) => (
            <PartnerItem partner={partner} key={partner.id} />
          ))}
        </div>
        <div className={cn(styles['partners__items'], styles['marquee'])}>
          {slicedArray[1].map((partner) => (
            <PartnerItem partner={partner} key={partner.id} />
          ))}
        </div>
      </div>

      <div className={styles['partners__items-wrap']}>
        <div className={cn(styles['partners__items'], styles['marquee'], styles['reverce'])}>
          {slicedArray[2].map((partner) => (
            <PartnerItem partner={partner} key={partner.id} />
          ))}
        </div>
        <div className={cn(styles['partners__items'], styles['marquee'], styles['reverce'])}>
          {slicedArray[3].map((partner) => (
            <PartnerItem partner={partner} key={partner.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PartnerItems
