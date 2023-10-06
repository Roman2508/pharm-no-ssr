export const clearPhoneNumber = (phone: string) => {
  if (!phone) return ''

  return phone.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll('_', '').replaceAll(' ', '')
}
