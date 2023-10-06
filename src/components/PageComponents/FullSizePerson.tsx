import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import styles from '../PageContent/Page.module.scss'
import { FancyboxGallery } from '../FancyboxGallery'
import replaceDataInBodyComponent from '@/utils/replaceDataInBodyComponent'

interface IFullSizePersonProps {
  component: any
}

const FullSizePerson: React.FC<IFullSizePersonProps> = ({ component }) => {
  const componentBody = replaceDataInBodyComponent(component?.body)

  return (
    <div className="container">
      <div className={styles['full-size__wrapper']}>
        <FancyboxGallery className={'page-gallery'}>
          <a
            data-fancybox="gallery"
            href={`${process.env.API_URL}${component.photo.data.attributes.url}`}
            className={cn(styles['full-size__img'], 'gallery-item', 'hand-pointer', 'scale-icon')}
            style={{ maxWidth: '200px' }}
          >
            <Image
              src={`${process.env.API_URL}${component.photo.data.attributes.url}`}
              alt="gallery photo"
              width={200}
              height={250}
            />
          </a>
        </FancyboxGallery>
        <div className={styles['full-size__content']}>
          <h3 className={styles['full-size__title']}>{component.name}</h3>
          <div className={styles['full-size__text']} dangerouslySetInnerHTML={{ __html: componentBody }} />
        </div>
      </div>
    </div>
  )
}

export default FullSizePerson
