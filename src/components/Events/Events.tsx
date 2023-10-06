import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

import useSlider from '@/hooks/useSlider'
import styles from './Events.module.scss'
import stylesSlider from '../Slider/Slider.module.scss'
import { SliderArrow } from '../Slider/SliderArrows'
import { GetAllEventsQuery } from '@/graphql/__generated__'
import convertMonthName from '@/utils/convertMonthName'
import { FancyboxGallery } from '../FancyboxGallery'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { gql } from '@/graphql/client'

export const Events = () => {
  const { activeSlide, loaded, sliderRef, instanceRef } = useSlider()

  const [events, setEvents] = React.useState<GetAllEventsQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await gql.GetAllEvents()
      setEvents(data)
    }
    fetchData()
  }, [])

  return (
    <div className={styles['events']}>
      <h2 className={cn(styles['events__title'], 'section-title')}>Події</h2>
      {events && (
        <FancyboxGallery>
          <div ref={sliderRef} className={cn(stylesSlider['slider__wrapper'], 'keen-slider')}>
            {events.events.data.map((el, index) => {
              const { day, month, year } = convertMonthName(el.attributes.date)

              return (
                <a
                  className={cn(styles['events__item'], 'keen-slider__slide')}
                  key={el.id}
                  data-fancybox="gallery"
                  href={`${process.env.API_URL}${el.attributes.image.data.attributes.url}`}
                >
                  <div
                    className={cn(stylesSlider['slide--inner'], {
                      [stylesSlider['active--slide']]: activeSlide === index,
                    })}
                  >
                    <div className={cn(styles['events__item'])}>
                      <div className={styles['events__photo']}>
                        <Image
                          src={`${process.env.API_URL}${el.attributes.image.data.attributes.url}`}
                          width={el.attributes.image.data.attributes.width}
                          height={el.attributes.image.data.attributes.height}
                          alt={el.attributes.image.data.attributes.name}
                          priority
                        />
                      </div>
                      <div className={styles['events__content']}>
                        <div className={styles['events__date']}>{`${day} ${month} ${year}`}</div>
                        <h5 className={styles['events__slider-title']}>{el.attributes.title}</h5>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </FancyboxGallery>
      )}

      {events && loaded && instanceRef.current && (
        <>
          <SliderArrow
            left
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={activeSlide === 0}
          />

          <SliderArrow
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={activeSlide === instanceRef.current.track.details.slides.length - 1}
          />
        </>
      )}
    </div>
  )
}
