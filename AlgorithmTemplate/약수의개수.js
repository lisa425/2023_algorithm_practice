function getDevisorCount(num) {
  let index = 1
  let result = []

  while (index <= Math.sqrt(num)) {
    if (num % index === 0) {
      result.push(index)
      if (num / index !== index) result.push(num / index)
    }
    index++
  }

  return result.length
}
