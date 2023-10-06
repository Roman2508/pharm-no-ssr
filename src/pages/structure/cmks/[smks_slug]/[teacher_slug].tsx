import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Layout } from '@/layouts/Layout'
import styles from './Teacher.module.scss'
import { gql, GetOneTeacherQuery } from '@/graphql/client'
import { FancyboxGallery } from '@/components/FancyboxGallery'
import pageStyles from '../../../../components/PageContent/Page.module.scss'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

const tabs = [
  { id: 1, text: 'Загальна інформація' },
  { id: 2, text: 'Додаткова інформація' },
  { id: 3, text: 'Друковані праці' },
]

const TeacherPage: React.FC = () => {
  const { query } = useRouter()

  const [activeTab, setActiveTab] = React.useState(1)
  const [teacher, setTeacher] = React.useState<GetOneTeacherQuery>()

  React.useEffect(() => {
    if (!query.teacher_slug) return

    const fetchData = async () => {
      const teacher = await gql.GetOneTeacher({
        teacherSlug: `${query.teacher_slug}`,
      })
      setTeacher(teacher)
    }

    fetchData()
  }, [])

  return (
    <Layout title={teacher ? teacher.workers.data[0].attributes.name : ''}>
      <div className="container">
        {teacher && <h1 className="section-title">{teacher.workers.data[0].attributes.name}</h1>}

        <div className={styles.wrapper}>
          <div className={styles['tabs-wrapper']}>
            <div className={styles.tabs}>
              {tabs.map((el) => (
                <div
                  key={el.id}
                  className={cn(styles.tab, {
                    [styles['active-tab']]: activeTab === el.id,
                  })}
                  onClick={() => setActiveTab(el.id)}
                >
                  {el.text}
                </div>
              ))}
            </div>
          </div>

          {teacher ? (
            <>
              {' '}
              {activeTab === 1 && (
                <div className={`${styles.content} ${styles['general-information']}`}>
                  <div className={styles.img}>
                    <FancyboxGallery>
                      <a
                        data-fancybox="gallery"
                        href={`${process.env.API_URL}${teacher.workers.data[0].attributes.photo.data.attributes.url}`}
                        style={{ maxWidth: '200px' }}
                      >
                        <Image
                          src={`${process.env.API_URL}${teacher.workers.data[0].attributes.photo.data.attributes.url}`}
                          alt={'teacher photo'}
                          width={150}
                          height={200}
                        />
                      </a>
                    </FancyboxGallery>
                  </div>
                  <div className={pageStyles['page-conent']}>
                    <Link
                      className={styles['mb-10']}
                      href={`/structure/cmks/${teacher.workers.data[0].attributes.cycle_commission.data.attributes.slug}`}
                    >
                      {teacher.workers.data[0].attributes.cycle_commission.data.attributes.name}
                    </Link>

                    {teacher.workers.data[0].attributes.email && (
                      <>
                        <span className={styles['mb-10']}>
                          <b>Електронна пошта:</b>
                        </span>
                        <Link className={styles['mb-10']} href={`mailto:${teacher.workers.data[0].attributes.email}`}>
                          {teacher.workers.data[0].attributes.email}
                        </Link>
                      </>
                    )}

                    <span className={styles['mb-10']}>
                      <b>Навчальні предмети, які викладає:</b>
                    </span>

                    <ul className={styles['lessons']}>
                      {teacher.workers.data[0].attributes.lessons.data.map((lesson) => (
                        /* @ts-ignore */
                        <li key={lesson.id}>«{lesson.attributes.name}»</li>
                      ))}
                    </ul>

                    <span className={styles['mb-10']}>
                      <b>Посада, науковий ступінь, вчене звання, кваліфікаційна категорія:</b>
                    </span>
                    <p>
                      {/* @ts-ignore  */}
                      {teacher.workers.data[0].attributes.status
                        ? /* @ts-ignore  */
                          teacher.workers.data[0].attributes.status
                        : teacher.workers.data[0].attributes.position}
                    </p>

                    <Link href={`/rozklad/vikladach/${teacher.workers.data[0].attributes.slug}`}>
                      Переглянути розклад викладача
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className={cn(styles.content, pageStyles['page-conent'])}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: teacher.workers.data[0].attributes.additional_information,
                    }}
                  />
                </div>
              )}
              {activeTab === 3 && (
                <div className={cn(styles.content, pageStyles['page-conent'])}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: teacher.workers.data[0].attributes.printed_works,
                    }}
                  />
                </div>
              )}
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default TeacherPage
