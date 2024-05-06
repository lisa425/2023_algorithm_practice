function solution(d, budget) {
  let sum = 0
  let count = 0
  d.sort((a, b) => a - b)

  for (let i = 0; i < d.length; i++) {
    if (sum + d[i] > budget) {
      break
    }
    sum += d[i]
    count += 1
  }

  return count
}

console.log(solution([1, 3, 2, 5, 4], 9))
