const replaceDataInBodyComponent = (body: string = '') => {
  const updatedBody = (body || '')
    .replaceAll('/uploads', `${process.env.API_URL}/uploads`)
    .replaceAll('<table>', `<div style="overflow-x: auto;"><table>`)
    .replaceAll('</table>', `</table></div>`)

  return updatedBody
}

export default replaceDataInBodyComponent
