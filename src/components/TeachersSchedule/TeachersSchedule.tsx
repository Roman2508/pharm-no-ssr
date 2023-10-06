import React from 'react'
import Link from 'next/link'

import styles from './TeachersSchedule.module.scss'
import { GetAllCycleCommissionsTeachersQuery } from '@/graphql/__generated__'

interface ITeachersScheduleProps {
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const TeachersSchedule: React.FC<ITeachersScheduleProps> = ({ cycleCommissions }) => {
  return (
    <div>
      {cycleCommissions.cycleCommissions.data.map((cmk) => (
        <div>
          <div className={styles['section-name']}>{cmk.attributes.name}</div>
          <div className={styles['section-items']}>
            {cmk.attributes.workers.data.map((teacher) => {
              const teacherName = teacher.attributes.name.split(' ')

              return (
                <div className={styles['teacher']}>
                  <Link className={`underlined-link`} href={`/rozklad/vikladach/${teacher.attributes.slug}`}>
                    {`${teacherName[0]} ${teacherName[1][0]}.${teacherName[2][0]}.`}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TeachersSchedule
