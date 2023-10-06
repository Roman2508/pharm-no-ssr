// @ts-nocheck

import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

import styles from './Page.module.scss'
import personStyles from './PersonComponent.module.scss'

import { useKeenSlider } from 'keen-slider/react'

import { PagePageComponentsDynamicZone, UploadFileEntity, Worker, WorkerEntity } from '@/graphql/__generated__'
import ButtonImages from '../PageComponents/ButtonImages'
import EducationBooks from '../PageComponents/EducationBooks'
import FullSizePerson from '../PageComponents/FullSizePerson'
import Partners from '../PageComponents/Partners'
import PageCardsComponent from '../PageComponents/PageCardsComponent'
import ButtonLink from '../PageComponents/ButtonLink'
import PersonComponent from '../PageComponents/PersonComponent/PersonComponent'
import PhotosGallery from '../PageComponents/PhotosGallery'
import AccordionComponent from '../PageComponents/AccordionComponent'
import PanoramsComponent from '../PageComponents/PanoramasComponent/PanoramsComponent'
import TwoColWithImage from '../PageComponents/TwoColWithImage/TwoColWithImage'
import replaceDataInBodyComponent from '@/utils/replaceDataInBodyComponent'

interface IPageContnetProps {
  colSize: string
  cmkHead?: Worker
  cmkSlug?: string
  mainPhotoCol?: readonly UploadFileEntity[]
  cmkTeachers?: readonly WorkerEntity[]
  pageComponents: readonly PagePageComponentsDynamicZone[]
}

const PageContnet = ({ colSize, pageComponents, mainPhotoCol, cmkHead, cmkTeachers, cmkSlug }: IPageContnetProps) => {
  const cmkHeadPhone = cmkHead?.phone
  const cmkHeadphoneWithoutSymbols = cmkHeadPhone
    ? cmkHeadPhone.replace('(', '').replace(')', '').replace('-', '').replace('_', '')
    : ''
  const cmkHeadLink = cmkHead ? `/structure/cmks/${cmkSlug}/${cmkHead.slug}` : '/'
  const teachersOnPage = 4
  const pagesCount = cmkTeachers ? Math.ceil(cmkTeachers.length / teachersOnPage) : 1

  const [teachersRange, setTeachersRange] = React.useState([0, teachersOnPage])
  const [currentPage, setCurrentPage] = React.useState(1)

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      // loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    }
    // [
    //   (slider) => {
    //     let timeout: ReturnType<typeof setTimeout>
    //     let mouseOver = false
    //     function clearNextTimeout() {
    //       clearTimeout(timeout)
    //     }
    //     function nextTimeout() {
    //       clearTimeout(timeout)
    //       if (mouseOver) return
    //       timeout = setTimeout(() => {
    //         slider.next()
    //       }, 5000)
    //     }
    //     slider.on('created', () => {
    //       slider.container.addEventListener('mouseover', () => {
    //         mouseOver = true
    //         clearNextTimeout()
    //       })
    //       slider.container.addEventListener('mouseout', () => {
    //         mouseOver = false
    //         nextTimeout()
    //       })
    //       nextTimeout()
    //     })
    //     slider.on('dragStarted', clearNextTimeout)
    //     slider.on('animationEnded', nextTimeout)
    //     slider.on('updated', nextTimeout)
    //   },
    // ]
  )

  const handleChangeTeachersRange = (currentPage: number) => {
    setCurrentPage(currentPage)
    setTeachersRange((prev) => {
      return [currentPage * teachersOnPage - teachersOnPage, currentPage * teachersOnPage]
    })
  }

  React.useEffect(() => {
    setCurrentPage(1)
  }, [cmkTeachers])

  return (
    <div className={colSize}>
      {mainPhotoCol && mainPhotoCol.length === 1 && (
        <div className={'cmk-main-photo'}>
          <Image
            src={`${process.env.API_URL}${mainPhotoCol[0].attributes.url}`}
            width={mainPhotoCol[0].attributes.width}
            height={mainPhotoCol[0].attributes.height}
            alt="main page photo"
          />
        </div>
      )}

      {mainPhotoCol && mainPhotoCol.length > 1 && (
        <>
          <div ref={sliderRef} className={cn('keen-slider', 'main-photo-slider')}>
            {mainPhotoCol.map((el) => (
              <div className={cn('cmk-main-photo', 'keen-slider__slide')}>
                <Image
                  src={`${process.env.API_URL}${el.attributes.url}`}
                  width={el.attributes.width}
                  height={el.attributes.height}
                  alt="main page photo"
                  priority
                />
              </div>
            ))}

            {loaded && instanceRef.current && (
              <div className="dots">
                {[...Array(instanceRef?.current?.track?.details?.slides?.length).keys()].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={'dot' + (currentSlide === idx ? ' active' : '')}
                    ></button>
                  )
                })}
              </div>
            )}

            {/* {instanceRef.current && (
              <>
                <SliderArrow
                  left
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                />

                <SliderArrow
                  onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                />
              </>
            )} */}
          </div>
        </>
      )}

      {cmkHead && (
        <div className={personStyles['wrapper']}>
          <Link href={cmkHeadLink} target="_blank">
            <div className={personStyles['photo']}>
              <Image
                src={`${process.env.API_URL}${cmkHead.photo.data.attributes.url}`}
                width={cmkHead.photo.data.attributes.width}
                height={cmkHead.photo.data.attributes.height}
              />
            </div>
          </Link>

          <div className={personStyles['info']}>
            <Link href={cmkHeadLink} target="_blank">
              <h5 className={personStyles['name']}>{cmkHead.name}</h5>
            </Link>

            <p className={personStyles['position']}>{cmkHead.position}</p>
            {cmkHead.phone && (
              <div>
                <a className={personStyles['tel']} href={`tel:${cmkHeadphoneWithoutSymbols}`}>
                  {cmkHead.phone}
                </a>
              </div>
            )}
            {cmkHead.email && (
              <a className={personStyles['email']} href={`mailto:${cmkHead.email}`}>
                {cmkHead.email}
              </a>
            )}
          </div>
        </div>
      )}
      {cmkTeachers && <div className={styles['cmk-teachers-title']}>Склад комісії</div>}
      {cmkTeachers && (
        <div className={styles['teachers-list']}>
          {cmkTeachers
            .filter((teacher) => teacher.attributes.name !== cmkHead?.name)
            .slice(teachersRange[0], teachersRange[1])
            .map((teacher) => {
              const nameArray = teacher.attributes.name.split(' ')
              const teacherLink = `/structure/cmks/${cmkSlug}/${teacher.attributes.slug}`

              return (
                <div className={styles['teacher-wrapper']} key={teacher.id}>
                  <div className={styles['teacher-row']}>
                    <Link className={styles['teacher-photo']} href={teacherLink}>
                      <Image
                        src={`${process.env.API_URL}${teacher.attributes.photo.data.attributes.url}`}
                        width={teacher.attributes.photo.data.attributes.width || 150}
                        height={teacher.attributes.photo.data.attributes.height || 150}
                        alt="teacher photo"
                      />
                    </Link>
                    <Link className={styles['teacher-name']} href={teacherLink}>
                      {nameArray.map((el) => {
                        if (!el.length) return
                        return (
                          <React.Fragment key={el}>
                            {el}
                            <br />
                          </React.Fragment>
                        )
                      })}
                    </Link>
                  </div>
                  <ul className={styles['teacher-lessons']}>
                    {teacher.attributes.lessons.data.map((lesson) => (
                      <li className={styles['teacher-lesson']} key={lesson.id}>
                        «{lesson.attributes.name}»
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
        </div>
      )}
      {cmkTeachers && (
        <div className={styles['cmk-teacher-pagination']}>
          {Array(pagesCount)
            .fill(null)
            .map((el, index) => (
              <span
                className={cn(styles['cmk-teacher-page'], {
                  [styles['active-page']]: currentPage === index + 1,
                })}
                onClick={() => handleChangeTeachersRange(index + 1)}
                key={index}
              >
                {index + 1}
              </span>
            ))}
        </div>
      )}
      {/* {pageComponents.map((component: PagePageComponentsDynamicZone) => { */}
      {pageComponents.map((component: any, index: number) => {
        if (component.component_type === 'body') {
          const componentBody = replaceDataInBodyComponent(component?.body)
          /* body */
          return (
            <div className={cn({ ['container']: colSize === 'col-12' })} key={index}>
              <div className={styles['page-conent']} dangerouslySetInnerHTML={{ __html: componentBody }} />
            </div>
          )
          /* // body */
        } else if (component.component_type === 'two_col_with_image') {
          return <TwoColWithImage component={component} key={index} colSize={colSize} />
        } else if (component.component_type === 'panoramas') {
          return <PanoramsComponent component={component} key={index} colSize={colSize} />
        } else if (component.component_type === 'accordion') {
          return <AccordionComponent component={component} key={index} colSize={colSize} />
        } else if (component.component_type === 'photos_gallery') {
          return <PhotosGallery component={component} colSize={colSize} key={index} />
        } else if (component.component_type === 'person') {
          return <PersonComponent component={component} key={index} />
        } else if (component.component_type === 'button_link') {
          return <ButtonLink component={component} key={index} colSize={colSize} />
        } else if (component.component_type === 'page_cards') {
          return <PageCardsComponent component={component} key={index} />
        } else if (component.component_type === 'partners') {
          return <Partners component={component} key={index} />
        } else if (component.component_type === 'full-size-person') {
          return <FullSizePerson component={component} key={index} />
        } else if (component.component_type === 'education_books') {
          return <EducationBooks component={component} key={index} />
        } else if (component.component_type === 'button_images') {
          return <ButtonImages component={component} key={index} />
        }

        return (
          <div style={{ color: 'red' }} key={index}>
            Unknown component!
          </div>
        )
      })}
    </div>
  )
}

export default PageContnet
