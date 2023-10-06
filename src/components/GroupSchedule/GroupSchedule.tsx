import React from "react"

import styles from "./GroupSchedule.module.scss"
import pageStyles from "../PageContent/Page.module.scss"
import { GetAllGroupsQuery } from "@/graphql/__generated__"
import { sortGroupsByDepartments } from "@/utils/sortGroupsByDepartments"
import Link from "next/link"

interface IGroupScheduleProps {
  groups: GetAllGroupsQuery
}

const educationalDegrees = [
  {
    slug: "OPS_Fahovij_molodshij_bakalavr_na_bazi_9_klasiv",
    name: "ОПС Фаховий молодший бакалавр (на базі 9 класів)",
  },
  {
    slug: "OPS_Fahovij_molodshij_bakalavr_na_bazi_11_klasiv",
    name: "ОПС Фаховий молодший бакалавр (на базі 11 класів)",
  },
  {
    slug: "OR_pershij_bakalavrskij",
    name: "ОР перший (бакалаврський)",
  },
]

const GroupSchedule: React.FC<IGroupScheduleProps> = ({ groups }) => {
  const { zaochnaForma, farmLab } = sortGroupsByDepartments(groups.groups.data)

  return (
    <div className={styles["wrapper"]}>
      <h2 className={`text-center ${styles["lg-title"]}`}>
        Фармацевтично-лабораторне відділення
      </h2>
      <h3 className={`text-center ${styles["md-title"]}`}>
        226 Фармація, промислова фармація
      </h3>

      {educationalDegrees.map((degree) => {
        const currentDegreeGroups = farmLab.filter(
          (g) =>
            String(g.attributes.specialty) ===
              "Farmacziya_promislova_farmacziya_226" &&
            String(g.attributes.educationalDegree) === String(degree.slug)
        )

        if (currentDegreeGroups.length) {
          return (
            <>
              <div className={styles["section-name"]}>{degree.name}</div>
              <div className={styles["groups-wrapper"]}>
                {currentDegreeGroups.map((group) => (
                  <Link
                    className={styles["group-item"]}
                    href={`/rozklad/grupa/${group.attributes.name}`}
                  >
                    {group.attributes.name}
                  </Link>
                ))}
              </div>
            </>
          )
        }
      })}

      <h3 className={`text-center ${styles["md-title"]}`}>
        224 Технології медичної діагностики та лікування
      </h3>
      {educationalDegrees.map((degree) => {
        const currentDegreeGroups = farmLab.filter(
          (g) =>
            String(g.attributes.specialty) ===
              "Tehnologiyi_medichnoyi_diagnostiki_ta_likuvannya_224" &&
            String(g.attributes.educationalDegree) === String(degree.slug)
        )

        if (currentDegreeGroups.length) {
          return (
            <>
              <div className={styles["section-name"]}>{degree.name}</div>
              <div className={styles["groups-wrapper"]}>
                {currentDegreeGroups.map((group) => (
                  <Link
                    className={styles["group-item"]}
                    href={`/rozklad/grupa/${group.attributes.name}`}
                  >
                    {group.attributes.name}
                  </Link>
                ))}
              </div>
            </>
          )
        }
      })}

      <h2 className={`text-center ${styles["lg-title"]}`}>
        Відділення заочної форми навчання
      </h2>
      {educationalDegrees.map((degree) => {
        const currentDegreeGroups = zaochnaForma.filter(
          (g) =>
            String(g.attributes.specialty) ===
              "Farmacziya_promislova_farmacziya_226" &&
            String(g.attributes.educationalDegree) === String(degree.slug)
        )

        if (currentDegreeGroups.length) {
          return (
            <>
              <div className={styles["section-name"]}>{degree.name}</div>
              <div className={styles["groups-wrapper"]}>
                {currentDegreeGroups.map((group) => (
                  <Link
                    className={styles["group-item"]}
                    href={`/rozklad/grupa/${group.attributes.name}`}
                  >
                    {group.attributes.name}
                  </Link>
                ))}
              </div>
            </>
          )
        }
      })}
    </div>
  )
}

export default GroupSchedule
