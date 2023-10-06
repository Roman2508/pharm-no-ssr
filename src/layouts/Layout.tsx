import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header/Header'
import SubHeader from '@/components/SubHeader/SubHeader'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { Footer } from '@/components/Footer/Footer'
import {
  FooterEntityResponse,
  GetFooterQuery,
  GetHeaderQuery,
  GetHeaderScheduleQuery,
  GetMainScreenQuery,
  GetSeoQuery,
  HeaderEntityResponse,
  SeoEntityResponse,
} from '@/graphql/__generated__'
import { gql } from '@/graphql/client'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

interface ILayoutProps {
  title?: string
  description?: string
}

export const Layout: React.FC<React.PropsWithChildren<ILayoutProps>> = ({ children, title = '' }) => {
  const [SEO, setSEO] = React.useState<SeoEntityResponse>()
  const [headerData, setHeaderData] = React.useState<HeaderEntityResponse>()
  const [footerData, setFooterData] = React.useState<FooterEntityResponse>()
  const [headerSchedule, setHeaderSchedule] = React.useState<GetHeaderScheduleQuery>()
  const [mainScreenData, setMainScreenData] = React.useState<GetMainScreenQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const layoutData = await gql.GetHomePageLayoutData()

        // @ts-ignore
        setSEO(layoutData.seo)
        // @ts-ignore
        setHeaderData(layoutData.header)
        // @ts-ignore
        setFooterData(layoutData.footer)

        const mainScreenData = await gql.GetMainScreen()
        setMainScreenData(mainScreenData)

        const headerSchedule = await gql.GetHeaderSchedule()
        setHeaderSchedule(headerSchedule)
      } catch (err) {
        console.log(err, 'layout error')
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
        <title>{`${title} | ЖБФК`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="title" content={`${title} | ЖБФК`} />
        <meta property="og:title" content={`${title} | ЖБФК`} />
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
        <SubHeader mainScreenData={mainScreenData} />
        <Breadcrumbs />
        {children}
        <Footer footerData={footerData} />
      </main>
    </>
  )
}
