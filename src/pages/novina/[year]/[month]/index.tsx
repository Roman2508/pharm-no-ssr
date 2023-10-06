import React from 'react'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

import { Layout } from '@/layouts/Layout'
import { News } from '@/components/News/News'
import NewsArchive from '@/components/News/NewsArchive'
import {
  GetAllNewsDatesQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetNewsByMonthQuery,
  GetNewsQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

const NewsPage: React.FC = () => {
  const { query } = useRouter()

  const [SEO, setSEO] = React.useState<GetSeoQuery>()
  const [newsData, setNewsData] = React.useState<GetNewsByMonthQuery>()
  const [newsDates, setNewsDates] = React.useState<GetAllNewsDatesQuery>()
  const [headerData, setHeaderData] = React.useState<GetHeaderQuery>()
  const [footerData, setFooterData] = React.useState<GetFooterQuery>()
  const [headerSchedule, setHeaderSchedule] = React.useState<GetHeaderScheduleQuery>()
  const [mainScreenData, setMainScreenData] = React.useState<GetMainScreenQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!query || !query.year || !query.month) {
          redirect('/404')
        }

        const SEO = await gql.GetSEO()
        const headerData = await gql.GetHeader()
        const footerData = await gql.GetFooter()
        const newsDates = await gql.GetAllNewsDates()
        const mainScreenData = await gql.GetMainScreen()
        const headerSchedule = await gql.GetHeaderSchedule()

        let maxDayInMonth = ''

        if (query.month === '01') {
          maxDayInMonth = '31'
        } else if (query.month === '02') {
          maxDayInMonth = '28'
        } else if (query.month === '03') {
          maxDayInMonth = '31'
        } else if (query.month === '04') {
          maxDayInMonth = '30'
        } else if (query.month === '05') {
          maxDayInMonth = '31'
        } else if (query.month === '06') {
          maxDayInMonth = '30'
        } else if (query.month === '07') {
          maxDayInMonth = '31'
        } else if (query.month === '08') {
          maxDayInMonth = '31'
        } else if (query.month === '09') {
          maxDayInMonth = '30'
        } else if (query.month === '10') {
          maxDayInMonth = '31'
        } else if (query.month === '11') {
          maxDayInMonth = '30'
        } else if (query.month === '12') {
          maxDayInMonth = '31'
        }

        const newsData = await gql.GetNewsByMonth({
          startDate: `${query.year}-${query.month}-01`,
          endDate: `${query.year}-${query.month}-${maxDayInMonth}`,
          pageSize: 6,
        })

        setSEO(SEO)
        setHeaderData(headerData)
        setFooterData(footerData)
        setNewsDates(newsDates)
        setNewsData(newsData)
        setHeaderSchedule(headerSchedule)
        setMainScreenData(mainScreenData)
      } catch (err) {
        console.log(err, 'news page error')
        window.location.replace('/404')
      }
    }

    fetchData()
  }, [])

  if (!SEO || !newsDates || !newsData || !headerData || !footerData || !mainScreenData || !headerSchedule) {
    return <LoadingSpinner />
  }

  return (
    <Layout
      SEO={SEO}
      title="Всі новини"
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Всі новини
        </div>

        <div className="page-row">
          <div className="col-news-9-12">
            <News newsData={newsData} pageSize={6} />
          </div>
          <div className="col-news-3-12">
            <NewsArchive newsDates={newsDates} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NewsPage
