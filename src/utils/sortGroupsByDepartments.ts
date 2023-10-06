interface Group {
  id: string
  attributes: {
    name: string
    vidilenya: {
      data: {
        attributes: {
          name: string
        }
      }
    }
    specialty: string
    educationalDegree: string
    course_number: string
  }
}

export const sortGroupsByDepartments = (groups: readonly any[]) => {
  const farmLab: Group[] = groups.filter(
    (el) =>
      el.attributes.vidilenya.data &&
      el.attributes.vidilenya.data.attributes.name === 'Фармацевтично-лабораторне відділення'
  )

  const zaochnaForma: Group[] = groups.filter(
    (el) =>
      el.attributes.vidilenya.data &&
      el.attributes.vidilenya.data.attributes.name === 'Відділення заочної форми навчання'
  )

  return {
    farmLab,
    zaochnaForma,
  }
}
