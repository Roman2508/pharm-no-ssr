import React from 'react'
import Image from 'next/image'

import styles from '../PageContent/Page.module.scss'

interface IButtonImagesProps {
  component: any
}

const ButtonImages: React.FC<IButtonImagesProps> = ({ component }) => {
  return (
    <div className={styles['button-images__wrapper']}>
      {component.Components.map((el: any) => (
        <a className={styles['button-images__link']} href={el.link} key={el.id}>
          <Image
            className={styles['button-images__img']}
            src={`${process.env.API_URL}${el.image.data.attributes.url}`}
            width={el.image.data.attributes.width}
            height={el.image.data.attributes.height}
            alt="photo"
          />
        </a>
      ))}
    </div>
  )
}

export default ButtonImages
