import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import {
  GetAllCycleCommissionsTeachersQuery,
  GetAllGroupsQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import GroupSchedule from '@/components/GroupSchedule/GroupSchedule'
import TeachersSchedule from '@/components/TeachersSchedule/TeachersSchedule'

interface ISchedulePageProps {
  SEO: GetSeoQuery
  groups: GetAllGroupsQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
  cycleCommissions: GetAllCycleCommissionsTeachersQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({
  SEO,
  groups,
  headerData,
  footerData,
  headerSchedule,
  mainScreenData,
  cycleCommissions,
}) => {
  return (
    <Layout
      SEO={SEO}
      title="Розклад"
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Групи
        </div>

        <GroupSchedule groups={groups} />

        <div className={`section-title`} style={{ margin: '60px 0 40px' }}>
          Викладачі
        </div>

        <TeachersSchedule cycleCommissions={cycleCommissions} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const groups = await gql.GetAllGroups()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()
    const cycleCommissions = await gql.GetAllCycleCommissionsTeachers()

    return {
      props: {
        SEO,
        groups,
        headerData,
        footerData,
        headerSchedule,
        mainScreenData,
        cycleCommissions,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return {
      props: {
        SEO: {},
        groups: {},
        headerData: {},
        footerData: {},
        mainScreenData: {},
        cycleCommission: {},
        headerSchedule: {},
      },
    }
  }
}

export default SchedulePage
