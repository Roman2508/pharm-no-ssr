import React from 'react'

import styles from '../PageContent/Page.module.scss'
import Link from 'next/link'

interface IButtonLinkProps {
  component: any
  colSize: string
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ component, colSize }) => {
  // const isNeedContainer =
  //   colSize === 'col-12' || colSize === 'col-7-12' || colSize === 'col-8-12' || colSize === 'col-9-12'
  const isNeedContainer = colSize === 'col-12'

  return (
    <div className={isNeedContainer ? 'container' : ''} key={component.id}>
      <Link href={component.link} className={styles['link']} target="_blank">
        {component.text}
      </Link>
    </div>
  )
}

export default ButtonLink
