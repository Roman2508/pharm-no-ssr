import React from 'react'

import styles from '../PageContent/Page.module.scss'
import PageCard from '../PageCard/PageCard'

interface IPageCardsProps {
  component: any
}

const PageCardsComponent: React.FC<IPageCardsProps> = ({ component }) => {
  return (
    <div className="container">
      <div className={styles['page-cards-wrapper']}>
        {component.cards.map((card: any) => (
          <PageCard
            key={card.id}
            id={card.id}
            slug={card.link}
            photo={card.photo.data.attributes.url}
            name={card.name}
          />
        ))}
      </div>
    </div>
  )
}

export default PageCardsComponent
