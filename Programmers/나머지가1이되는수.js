function solution(n) {
  let i = 1
  while (n % i !== 1) {
    console.log(i, n % i)
    i += 1
  }
  return i
}

console.log(solution(15))
