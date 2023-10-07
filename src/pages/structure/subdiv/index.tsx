import React from "react"
import { GetServerSideProps, NextPage } from "next"

import { Layout } from "@/layouts/Layout"
import styles from "../Structure.module.scss"
import PageCard from "@/components/PageCard/PageCard"
import { GetAllSubdivisionQuery, gql } from "@/graphql/client"
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner"

const SubdivPage: NextPage = () => {
  const [subdivList, setSubdivList] = React.useState<GetAllSubdivisionQuery>()

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const subdivList = await gql.GetAllSubdivision()
        setSubdivList(subdivList)
      } catch (err) {
        console.log(err, "subdiv page error")
        window.location.replace("/404")
      }
    }

    fetchData()
  }, [])

  return (
    <Layout title={"Підрозділи"}>
      <h1 className={`${styles["main-title"]} section-title`}>Підрозділи</h1>

      <div className="container">
        {subdivList ? (
          <div className={styles["smk-list"]}>
            {subdivList.subdivisions.data.map((el) => (
              <PageCard
                id={el.id}
                department={"subdiv"}
                slug={el.attributes.slug}
                photo={el.attributes.main_photo.data[0].attributes.url}
                name={el.attributes.name}
              />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </Layout>
  )
}

export default SubdivPage
