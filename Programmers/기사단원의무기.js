function solution(number, limit, power) {
  let result = 0

  for (let i = 1; i <= number; i++) {
    let devisorCount = getDevisorCount(i) > limit ? power : getDevisorCount(i)
    result += devisorCount
  }

  return result
}

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

console.log(solution(100, 3, 2))
