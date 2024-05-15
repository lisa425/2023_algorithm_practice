function solution(s) {
  const indexList = {}
  const answer = []

  Array.from(s).forEach((char, i) => {
    if (indexList[char] === undefined) {
      answer.push(-1)
    } else {
      answer.push(i - indexList[char])
    }
    indexList[char] = i
  })

  return answer
}
