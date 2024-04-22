function solution(a, b) {
  if (a === b) return a

  let answer = 0

  while (a !== b) {
    answer += a
    a = a > b ? a - 1 : a + 1
  }

  answer += b

  return answer
}

console.log(solution(7, 5))
