import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import GroupSchedule from '@/components/GroupSchedule/GroupSchedule'
import {
  GetAllGroupsQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'

interface ISchedulePageProps {
  SEO: GetSeoQuery
  groups: GetAllGroupsQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const SchedulePage: React.FC<ISchedulePageProps> = ({
  SEO,
  groups,
  headerData,
  footerData,
  mainScreenData,
  headerSchedule,
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
        <GroupSchedule groups={groups} />
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

    return {
      props: {
        SEO,
        groups,
        headerData,
        footerData,
        mainScreenData,
        headerSchedule,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'news page error')
    return { props: { SEO: {}, groups: {}, headerData: {}, footerData: {}, mainScreenData: {}, headerSchedule: {} } }
  }
}

export default SchedulePage
