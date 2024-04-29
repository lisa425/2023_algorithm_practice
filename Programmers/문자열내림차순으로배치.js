function solution(s) {
  const answer = Array.from(s)
    .sort((a, b) => (a > b ? -1 : 1))
    .join('')

  return answer
}

console.log(solution('ZbcdefNg'))
