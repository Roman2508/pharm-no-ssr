import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import { gql } from '@/graphql/client'
import styles from './About.module.scss'
import { GetHomePageAboutQuery } from '@/graphql/__generated__'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const About: React.FC = () => {
  const [data, setData] = React.useState<GetHomePageAboutQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await gql.GetHomePageAbout()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className={cn(styles['about'], styles['about--page'])}>
      <div className={'container'}>
        {data ? (
          <div className={cn(styles['about__wrapper'], styles['vertical-center'])}>
            <div className={cn(styles['about__content'], styles['about--page'])}>
              <h2>{data.homePageAbout.data.attributes.title}</h2>

              <div dangerouslySetInnerHTML={{ __html: data.homePageAbout.data.attributes.body }} />

              <Link className={styles['about__button']} href="/pro-zhbphc/istoria-col">
                {data.homePageAbout.data.attributes.buttonText}
              </Link>
            </div>

            <div className={styles['about__image']}>
              <Image
                src={`${process.env.API_URL}${data.homePageAbout.data.attributes.photo.data.attributes.url}`}
                width={400}
                height={400}
                layout="responsive"
                alt="college photo"
              />
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  )
}

export default About
