function solution(n) {
  let str = '수박'.repeat(Math.floor(n / 2)) + (n % 2 ? '수' : '')
  return str
}
console.log(solution(6))
