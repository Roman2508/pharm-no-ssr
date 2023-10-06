const convertMonthName = (date: string) => {
  const dateArray = date.split('-')
  const monthNumber = dateArray[1]
  let monthName = ''

  if (monthNumber === '01') {
    monthName = 'Січня'
  } else if (monthNumber === '02') {
    monthName = 'Лютого'
  } else if (monthNumber === '03') {
    monthName = 'Березня'
  } else if (monthNumber === '04') {
    monthName = 'Квітня'
  } else if (monthNumber === '05') {
    monthName = 'Травня'
  } else if (monthNumber === '06') {
    monthName = 'Червня'
  } else if (monthNumber === '07') {
    monthName = 'Липня'
  } else if (monthNumber === '08') {
    monthName = 'Серпня'
  } else if (monthNumber === '09') {
    monthName = 'Вересня'
  } else if (monthNumber === '10') {
    monthName = 'Жовтня'
  } else if (monthNumber === '11') {
    monthName = 'Листопада'
  } else if (monthNumber === '12') {
    monthName = 'Грудня'
  }

  return {
    day: dateArray[2],
    month: monthName,
    year: dateArray[0],
  }
}

export default convertMonthName
