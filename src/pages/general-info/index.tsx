import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import {
  gql,
  GetSeoQuery,
  GetFooterQuery,
  GetHeaderQuery,
  GetMainScreenQuery,
  GetHeaderScheduleQuery,
} from '@/graphql/client'
import { Layout } from '@/layouts/Layout'
import styles from './GeneralInfo.module.scss'
import tableStyles from '../../components/ui/Table/Table.module.scss'

interface IGeneralInfoProps {
  SEO: GetSeoQuery
  headerData: GetHeaderQuery
  footerData: GetFooterQuery
  mainScreenData: GetMainScreenQuery
  headerSchedule: GetHeaderScheduleQuery
}

const GeneralInfo: React.FC<IGeneralInfoProps> = ({ SEO, headerData, footerData, mainScreenData, headerSchedule }) => {
  return (
    <Layout
      SEO={SEO}
      headerData={headerData}
      footerData={footerData}
      mainScreenData={mainScreenData}
      headerSchedule={headerSchedule}
      title="Zhytomyr College of Pharmacy"
    >
      <div className="container">
        <div className={`section-title`} style={{ marginBottom: '40px' }}>
          Zhytomyr College of Pharmacy
        </div>

        <div className="page-row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6291.689037301852!2d28.64056024719695!3d50.244635952177546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c648aed44e5cf%3A0x8c8080cc023799b!2z0JbQuNGC0L7QvNC40YDRgdGM0LrQuNC5INCx0LDQt9C-0LLQuNC5INGE0LDRgNC80LDRhtC10LLRgtC40YfQvdC40Lkg0YTQsNGF0L7QstC40Lkg0LrQvtC70LXQtNC2INCW0LjRgtC-0LzQuNGA0YHRjNC60L7RlyDQvtCx0LvQsNGB0L3QvtGXINGA0LDQtNC4!5e0!3m2!1sru!2sua!4v1688215841222!5m2!1sru!2sua"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className={styles.wrapper}>
            <div className={styles.col}>
              <div className={styles['section-name']}>Correspondence Address:</div>
              <div className={styles.info}>
                <p>Chudnivska str. 99</p>
                <p>Zhytomyr </p>
                <p>10005, Ukraine</p>
                <p>
                  Phone: <a href="tel:0412242547">(0412) 24-25-47</a>
                </p>
                <p>
                  E-mail: <a href="mailto:college@pharm.zt.ua">college@pharm.zt.ua</a>
                </p>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles['section-name']}>Principal:</div>
              <div className={styles.principal}>
                <div className={styles.img}>
                  <Image
                    src="/assets/images/general-info/boychuk-irina-dmitrivna.jpg"
                    alt="principal photo"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.info}>
                  <h4>Boichuk Iryna</h4>
                  <p>
                    Phone: <a href="tel:0412242545">(0412) 24-25-45</a>
                  </p>
                  <p>
                    E-mail: <a href="mailto:boichuck.iryna@pharm.zt.ua">boichuck.iryna@pharm.zt.ua</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className={tableStyles['table']}>
              <thead>
                <tr>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Field of Expertise</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Program Subject Area </strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Education Program</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Educational Background</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Form of Study </strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Term of Study</strong>
                    </p>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan={1} rowSpan={7}>
                    <p>
                      <strong>22 Health</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={5}>
                    <p>
                      <strong>226 Pharmacy, Industrial Pharmacy</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={5}>
                    <p>
                      <strong>Pharmacy</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={2}>
                    <p>
                      <strong>
                        <a href="https://drive.google.com/file/d/1npa0f3KYWGm-639hG4Gm-1vywLYDC6Bo/view">
                          І (baccalaureate)
                        </a>
                      </strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Intramural</strong> (on the basis of complete general secondary education)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>3 years</strong>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Extramural</strong> (on the basis of education qualificational level junior specialist)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>2 years</strong>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={1} rowSpan={3}>
                    <p>
                      <strong>
                        <a href="https://drive.google.com/drive/folders/186VHbPxrtxX9XAQAyUTu9JhlVaob4ghj">
                          junior specialist,
                        </a>
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <a href="https://drive.google.com/drive/folders/186VHbPxrtxX9XAQAyUTu9JhlVaob4ghj">
                          Junior Bachelor
                        </a>
                      </strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Intramural</strong> (on the basis of basic general secondary education)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>3 years</strong>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Intramural</strong> (on the basis of complete secondary education)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>2 years</strong>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Extramural</strong> (on the basis of complete secondary education)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>2,5 years</strong>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={1} rowSpan={2}>
                    <p>
                      <strong>224 Technologies of Medical Diagnostics and Treatment</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={2}>
                    <p>
                      <strong>Laboratory Diagnostics</strong>
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={2}>
                    junior specialist
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Intramural</strong> (on the basis of basic general secondary education)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>3 years</strong>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={1} rowSpan={1}>
                    <p>
                      <strong>Intramural</strong> (on the basis of complete secondary education)
                    </p>
                  </td>
                  <td colSpan={1} rowSpan={1}>
                    <strong>2 years</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const SEO = await gql.GetSEO()
    const headerData = await gql.GetHeader()
    const footerData = await gql.GetFooter()
    const mainScreenData = await gql.GetMainScreen()
    const headerSchedule = await gql.GetHeaderSchedule()

    return {
      props: {
        SEO,
        headerData,
        footerData,
        mainScreenData,
        headerSchedule,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log(error, 'general info page error')
    return { props: { SEO: {}, headerData: {}, footerData: {}, mainScreenData: {}, headerSchedule: {} } }
  }
}

export default GeneralInfo
