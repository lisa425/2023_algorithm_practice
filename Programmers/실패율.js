function solution(N, stages) {
  let rank = Object.fromEntries(Array.from({ length: N }, (_, i) => [i + 1, 0]))
  let user = stages.length

  Object.entries(rank).forEach((obj) => {
    const challenger = stages.filter((value) => value == obj[0]).length
    if (challenger) {
      const failRate = challenger / user
      rank[obj[0]] = failRate
      user = user - challenger
    }
  })

  let answer = Object.entries(rank)
    .sort((a, b) => b[1] - a[1])
    .map((v) => Number(v[0]))

  return answer
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
