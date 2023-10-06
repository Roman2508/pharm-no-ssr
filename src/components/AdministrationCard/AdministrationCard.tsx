import React from "react"

import styles from "./AdministrationCard.module.scss"
import Link from "next/link"
import Image from "next/image"
import { FancyboxGallery } from "../FancyboxGallery"

interface IAdministrationCardProps {
  photo: string
  position: string
  name: string
  phone: string
  mail: string
}

// ;<FancyboxGallery className={'page-gallery'}>
//   <a data-fancybox="gallery" href={`${process.env.API_URL}${photo}`} style={{ maxWidth: '200px' }}>
//     <Image src={`${process.env.API_URL}${photo}`} alt="gallery photo" width={150} height={200} />
//   </a>
// </FancyboxGallery>

const AdministrationCard: React.FC<IAdministrationCardProps> = ({
  photo,
  position,
  name,
  phone,
  mail,
}) => {
  return (
    <div className={styles["administration__item"]}>
      <FancyboxGallery className={"page-gallery"}>
        <a
          className={styles["administration__item-top"]}
          data-fancybox="gallery"
          href={`${process.env.API_URL}${photo}`}
        >
          <Image
            src={`${process.env.API_URL}${photo}`}
            width={300}
            height={400}
            alt="administration"
          />
          <p className={styles["administration__item-position"]}>{position}</p>
        </a>
      </FancyboxGallery>

      <div className={styles["administration__item-name"]}>{name}</div>
      <a className={styles["administration__item-tel"]} href="tel:0412242545">
        {phone}
      </a>
      <a
        className={styles["administration__item-mail"]}
        href="mailto:boychuck.iryna@pharm.zt.ua"
      >
        {mail}
      </a>
    </div>
  )
}

export default AdministrationCard
