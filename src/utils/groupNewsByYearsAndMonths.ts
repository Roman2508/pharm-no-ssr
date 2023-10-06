import { GetAllNewsDatesQuery } from '@/graphql/__generated__'

interface IRequestedData {
  data: {
    novinas: {
      data: { id: string; attributes: { date: string } }[]
    }
  }
}

interface IYearsAndMonths {
  year: string
  months: string[]
}

interface INewMonths {
  monthNum: string
  monthName: string
  count: number
}

const groupNewsByYearsAndMonths = (data: GetAllNewsDatesQuery) => {
  if (!data) {
    return
  }

  const datesArr = data.novinas.data.map((el) => el.attributes.date)

  const res: IYearsAndMonths[] = []

  datesArr.forEach((el) => {
    const d = el.split('-')

    const finded = res.find((f) => f.year === d[0])

    if (finded) {
      finded.months.push(d[1])
    } else {
      res.push({ year: d[0], months: [d[1]] })
    }
  })

  const res2 = res.map((r) => {
    const newMonths: INewMonths[] = []

    r.months.map((m) => {
      const finded = newMonths.find((f) => f.monthNum === m)

      if (finded) {
        finded.count++
      } else {
        const monthNum = m
        let monthName = ''

        if (monthNum === '01') {
          monthName = 'Січень'
        } else if (monthNum === '02') {
          monthName = 'Лютий'
        } else if (monthNum === '03') {
          monthName = 'Березень'
        } else if (monthNum === '04') {
          monthName = 'Квітень'
        } else if (monthNum === '05') {
          monthName = 'Травень'
        } else if (monthNum === '06') {
          monthName = 'Червень'
        } else if (monthNum === '07') {
          monthName = 'Липень'
        } else if (monthNum === '08') {
          monthName = 'Серпень'
        } else if (monthNum === '09') {
          monthName = 'Вересень'
        } else if (monthNum === '10') {
          monthName = 'Жовтень'
        } else if (monthNum === '11') {
          monthName = 'Листопад'
        } else if (monthNum === '12') {
          monthName = 'Грудень'
        }

        newMonths.push({ monthNum, monthName, count: 1 })
      }
    })

    const sortedMonth = newMonths.sort((a, b) => {
      if (a.monthNum < b.monthNum) {
        return -1
      }
      if (a.monthNum > b.monthNum) {
        return 1
      }
      return 0
    })

    return { ...r, months: sortedMonth }
  })

  return res2
}

export default groupNewsByYearsAndMonths
