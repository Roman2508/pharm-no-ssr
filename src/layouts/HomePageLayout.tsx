import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import MainScreen from '@/components/MainScreen/MainScreen'
import {
  FooterEntityResponse,
  GetFooterQuery,
  GetHeaderQuery,
  GetSeoQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  HeaderEntityResponse,
  SeoEntityResponse,
} from '@/graphql/__generated__'
import { gql } from '@/graphql/client'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface ILayoutProps {
  title?: string
  description?: string
}

export const HomePageLayout: React.FC<PropsWithChildren<ILayoutProps>> = ({ children, title = 'ЖБФФК' }) => {
  const [SEO, setSEO] = React.useState<SeoEntityResponse>()
  const [headerData, setHeaderData] = React.useState<HeaderEntityResponse>()
  const [footerData, setFooterData] = React.useState<FooterEntityResponse>()
  const [headerSchedule, setHeaderSchedule] = React.useState<GetHeaderScheduleQuery>()
  const [mainScreenData, setMainScreenData] = React.useState<GetMainScreenQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const headerSchedule = await gql.GetHeaderSchedule()
        const mainScreenData = await gql.GetMainScreen()

        const layoutData = await gql.GetHomePageLayoutData()

        // @ts-ignore
        setSEO(layoutData.seo)
        // @ts-ignore
        setHeaderData(layoutData.header)
        // @ts-ignore
        setFooterData(layoutData.footer)

        setHeaderSchedule(headerSchedule)
        setMainScreenData(mainScreenData)
      } catch (err) {
        console.log(err, 'home layout error')
        window.location.replace('/404')
      }
    }

    fetchData()
  }, [])

  if (!SEO || !headerData || !headerSchedule || !footerData || !mainScreenData) {
    return <LoadingSpinner />
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="title" content={`${title} | ЖБФК`} />
        <meta property="og:title" content={`${title} | ЖБФК`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {SEO.data.attributes.SEO.length > 0 &&
          SEO.data.attributes.SEO.map((el) => <meta key={el.id} property={el.name} content={el.content} />)}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://pharm.zt.ua//themes/custom/pharm/favicon-32x32.png"
        />
      </Head>
      <main>
        <Header headerData={headerData} headerSchedule={headerSchedule} />
        <MainScreen mainScreenData={mainScreenData} />
        {children}
        <Footer footerData={footerData} />
      </main>
    </>
  )
}
