function solution(s, skip, index) {
  const alphabet = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97))
    .filter((str) => !skip.includes(str))

  return s
    .split('')
    .map((str) => alphabet[(alphabet.indexOf(str) + index) % alphabet.length])
    .join('')
}

console.log(solution('apple', 'bqr', 7))
