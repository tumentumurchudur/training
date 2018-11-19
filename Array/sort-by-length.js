// const revArr = ["tumen", "hello world", "test", "asfsafsafsafsafsafsafsaf"]

/**
 * This function sorts an array of string values based on the average length.
 * The closer the length of a string is to the average, the higher it ranks.
 * @param {*} reviews
 */
function sortReviewsByLength(reviews) {
  // finds average length
  let sumLength = 0
	reviews.forEach(review => sumLength += review.length)
  const avgLength = sumLength / reviews.length

  return [...reviews].sort((a, b) => {
    const aLen = Math.abs(a.length - avgLength)
    const bLen = Math.abs(b.length - avgLength)

    if (aLen > bLen) {
      return 1
    } else if (aLen < bLen) {
      return -1
    }
    return 0
  })
}
