import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

import styles from '../PageContent/Page.module.scss'
import { FancyboxGallery } from '../FancyboxGallery'

interface IPhotosGalleryProps {
  component: any
  colSize: string
}

const PhotosGallery: React.FC<IPhotosGalleryProps> = ({ component, colSize }) => {
  return (
    <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
      <div>
        {component.title && (
          <h3 style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: component.title }} />
        )}
      </div>
      <div style={{ marginBottom: '40px' }}>
        <FancyboxGallery className={'page-gallery'}>
          {component.images.data.map((el: any) => (
            <a
              key={el.id}
              data-fancybox="gallery"
              href={`${process.env.API_URL}${el.attributes.url}`}
              className={cn(styles['photo-item'], 'gallery-item', 'hand-pointer', 'scale-icon')}
              style={{ maxWidth: '200px' }}
            >
              <Image src={`${process.env.API_URL}${el.attributes.url}`} alt="gallery photo" width={150} height={200} />
            </a>
          ))}
        </FancyboxGallery>
      </div>
    </div>
  )
}

export default PhotosGallery
