import React from 'react'
import cn from 'classnames'

import Image from 'next/image'
import styles from './TwoColWithImage.module.scss'

interface ITwoColWithImageProps {
  component: any
  colSize: string
}

const TwoColWithImage: React.FC<ITwoColWithImageProps> = ({ component, colSize }) => {
  if (component.layout === 'text_image') {
    return (
      <div className={cn({ ['container']: colSize === 'col-12' })}>
        <div className={styles['wrapper']}>
          <div
            className={cn(styles['content'], styles['right-image'])}
            dangerouslySetInnerHTML={{ __html: component.body }}
          />
          <div className={styles['image-box']}>
            <Image
              src={`${process.env.API_URL}${component.image.data.attributes.url}`}
              width={component.image.data.attributes.width}
              height={component.image.data.attributes.height}
              alt={'photo'}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
        <div className={styles['wrapper']}>
          <div className={styles['image-box']}>
            <Image
              src={`${process.env.API_URL}${component.image.data.attributes.url}`}
              width={component.image.data.attributes.width}
              height={component.image.data.attributes.height}
              alt={'photo'}
            />
          </div>
          <div
            className={cn(styles['content'], styles['left-image'])}
            dangerouslySetInnerHTML={{ __html: component.body }}
          />
        </div>
      </div>
    )
  }
}

export default TwoColWithImage
