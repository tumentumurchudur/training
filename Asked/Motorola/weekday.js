function solution(S, K) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const currIndex = days.indexOf(S)
  if (currIndex === -1) {
   return null
  }

  const advanceIndex = K % 7
  const total = currIndex + advanceIndex

  if (total < days.length) {
    return days[total]
  } else {
    return days[advanceIndex - (days.length - currIndex)]
  }
}
