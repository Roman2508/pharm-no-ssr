import { PagePageComponentsDynamicZone } from '@/graphql/__generated__'
import React from 'react'

interface IdynamicPageLayoutProps {
  layout: string
  pageContent: readonly PagePageComponentsDynamicZone[]
  leftSidebar: readonly PagePageComponentsDynamicZone[]
  rightSidebar: readonly PagePageComponentsDynamicZone[]
}

const dynamicPageLayout = ({ layout, pageContent, leftSidebar, rightSidebar }: IdynamicPageLayoutProps) => {
  const ddd = (content: any) => {
    const contentType = content.component_type

    if (contentType === 'body') {
      return String(layout) === 'col_8_4'
        ? ({ children }: { children: React.ReactNode }) => {
            return (
              <div className="page-row">
                <div className="row-12-8"></div>
                <div className="row-12-4"></div>
              </div>
            )
          }
        : String(layout) === 'col_9_3'
        ? ({ children }: { children: React.ReactNode }) => {
            return (
              <div className="page-row">
                <div className="row-12-9"></div>
                <div className="row-12-3"></div>
              </div>
            )
          }
        : String(layout) === 'col_2_7_4'
        ? ({ children }: { children: React.ReactNode }) => {
            return (
              <div className="page-row">
                <div className="row-12-2"></div>
                <div className="row-12-7"></div>
                <div className="row-12-4"></div>
              </div>
            )
          }
        : String(layout) === 'col_1_8_3'
        ? ({ children }: { children: React.ReactNode }) => {
            return (
              <div className="page-row">
                <div className="row-12-1"></div>
                <div className="row-12-8"></div>
                <div className="row-12-3"></div>
              </div>
            )
          }
        : ({ children }: { children: React.ReactNode }) => {
            return <></>
          }
    }
  }

  // console.log(ddd(pageContent[4]))

  // npm install remark remark-html

  const pageLayout =
    String(layout) === 'col_8_4'
      ? ({ children }: { children: React.ReactNode }) => {
          return (
            <div className="page-row">
              <div className="row-12-8">{children}</div>
              <div className="row-12-4"></div>
            </div>
          )
        }
      : String(layout) === 'col_9_3'
      ? ({ children }: { children: React.ReactNode }) => {
          return (
            <div className="page-row">
              <div className="row-12-9">{children}</div>
              <div className="row-12-3"></div>
            </div>
          )
        }
      : String(layout) === 'col_2_7_4'
      ? ({ children }: { children: React.ReactNode }) => {
          return (
            <div className="page-row">
              <div className="row-12-2"></div>
              <div className="row-12-7">{children}</div>
              <div className="row-12-4"></div>
            </div>
          )
        }
      : String(layout) === 'col_1_8_3'
      ? ({ children }: { children: React.ReactNode }) => {
          return (
            <div className="page-row">
              <div className="row-12-1"></div>
              <div className="row-12-8">{children}</div>
              <div className="row-12-3"></div>
            </div>
          )
        }
      : ({ children }: { children: React.ReactNode }) => {
          return <>{children}</>
        }

  return pageLayout
}

export default dynamicPageLayout
