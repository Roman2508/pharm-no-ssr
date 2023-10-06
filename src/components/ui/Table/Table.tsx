import React from 'react'
import styles from './Table.module.scss'
import { cabinetsData } from './cabinetsManagers'

const Table = () => {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    return (
      <table className={styles['table']} suppressHydrationWarning={true}>
        <tr>
          <th>№ ауд.</th>
          <th>Назва кабінету, лабораторії ПІБ завідувача</th>
          <th>Навчальні дисципліни</th>
        </tr>

        {cabinetsData.map((row) => (
          <tr>
            <td>
              {row.auditoriums.map((el) => (
                <>
                  {el}
                  <br />
                </>
              ))}
            </td>
            <td>
              <b>{row.cabinetManagerName[0]}</b> <br />
              {row.cabinetManagerName[1]}
            </td>
            <td>
              <ul>
                {row.subjects.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </table>
    )
  }
}

export default Table
