function solution(strings, n) {
  strings.sort((next, prev) => {
    if (next[n] > prev[n]) return 1
    if (next[n] < prev[n]) return -1
    if (next[n] == prev[n]) return next > prev ? 1 : -1
  })
  return strings
}

console.log(solution(['abce', 'cdx', 'abcd'], 2))
