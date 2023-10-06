import range from 'lodash.range'

export const returnPaginationRange = (totalPage: number, page: number, limit: number = 3, siblings: number = 1) => {
  let totalPageNoInArray = 7 + siblings

  if (totalPageNoInArray >= totalPage) {
    return range(1, totalPage + 1)
  }

  let leftSiblingsIndex = Math.max(page - siblings, 1)
  let rightSiblingsIndex = Math.min(page + siblings, totalPage)

  let showLeftDots = leftSiblingsIndex > 2
  let showRightDots = rightSiblingsIndex < totalPage - 2

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 2 + 2 * siblings
    let leftRange = range(1, leftItemsCount + 1)

    return [...leftRange, '...', totalPage]
    //
  } else if (showLeftDots && !showRightDots) {
    let rightItemsCount = 2 + 2 * siblings
    let rightRange = range(totalPage - rightItemsCount + 1, totalPage + 1)

    return [1, '...', ...rightRange]
    //
  } else {
    let middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1)
    return [1, '...', ...middleRange, '...', totalPage]
  }
}

export default returnPaginationRange
