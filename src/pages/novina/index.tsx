import React from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '@/layouts/Layout'
import { News } from '@/components/News/News'
import NewsArchive from '@/components/News/NewsArchive'
import {
  GetAllNewsDatesQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetNewsQuery,
  GetSeoQuery,
  gql,
} from '@/graphql/client'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

// interface INewsPageProps {
//   SEO: GetSeoQuery
//   newsData: GetNewsQuery
//   headerData: GetHeaderQuery
//   footerData: GetFooterQuery
//   mainScreenData: GetMainScreenQuery
//   newsDates: GetAllNewsDatesQuery
//   headerSchedule: GetHeaderScheduleQuery
// }

const NewsPage: React.FC /* <INewsPageProps> */ = (
  {
    // SEO,
    // headerData,
    // footerData,
    // mainScreenData,
    // newsData,
    // newsDates,
    // headerSchedule,
  }
) => {
  const [SEO, setSEO] = React.useState<GetSeoQuery>()
  const [headerData, setHeaderData] = React.useState<GetHeaderQuery>()
  const [headerSchedule, setHeaderSchedule] = React.useState<GetHeaderScheduleQuery>()
  const [footerData, setFooterData] = React.useState<GetFooterQuery>()
  const [mainScreenData, setMainScreenData] = React.useState<GetMainScreenQuery>()
  const [newsData, setNewsData] = React.useState<GetNewsQuery>()
  const [newsDates, setNewsDates] = React.useState<GetAllNewsDatesQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      const SEO = await gql.GetSEO()
      const headerData = await gql.GetHeader()
      const headerSchedule = await gql.GetHeaderSchedule()
      const footerData = await gql.GetFooter()
      const mainScreenData = await gql.GetMainScreen()
      const newsData = await gql.GetNews({ pageSize: 6 })
      const newsDates = await gql.GetAllNewsDates()

      setSEO(SEO)
      setHeaderData(headerData)
      setFooterData(footerData)
      setHeaderSchedule(headerSchedule)
      setMainScreenData(mainScreenData)
      setNewsDates(newsDates)
      setNewsData(newsData)
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

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const SEO = await gql.GetSEO()
//     const headerData = await gql.GetHeader()
//     const footerData = await gql.GetFooter()
//     const mainScreenData = await gql.GetMainScreen()
//     const newsData = await gql.GetNews({ pageSize: 6 })
//     const newsDates = await gql.GetAllNewsDates()
//     const headerSchedule = await gql.GetHeaderSchedule()

//     if (
//       !headerData.header.data ||
//       !mainScreenData.header.data ||
//       !SEO.seo.data.attributes.SEO.length ||
//       !headerSchedule.groups.data.length ||
//       !headerSchedule.workers.data.length ||
//       !newsData.novinas.data.length ||
//       !newsDates.novinas.data.length
//     ) {
//       return {
//         props: {
//           SEO: {},
//           headerData: {},
//           footerData: {},
//           mainScreenData: {},
//           newsData: {},
//           newsDates: {},
//           headerSchedule: {},
//         },
//         redirect: { destination: '/404', permanent: true },
//       }
//     }

//     return {
//       props: {
//         SEO,
//         newsData,
//         footerData,
//         newsDates,
//         headerData,
//         mainScreenData,
//         headerSchedule,
//       },
//       revalidate: 10,
//     }
//   } catch (error) {
//     console.log(error, 'news page error')
//     return {
//       props: {
//         SEO: {},
//         newsData: {},
//         newsDates: {},
//         headerData: {},
//         footerData: {},
//         mainScreenData: {},
//         headerSchedule: {},
//       },
//       redirect: { destination: '/404', permanent: true },
//     }
//   }
// }

export default NewsPage
