function solution(n, m) {
  //최대공약수
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b))
  //최소공배수
  const lcm = (a, b) => (a * b) / gcd(a, b)

  var answer = [gcd(n, m), lcm(n, m)]
  return answer
}

console.log(solution(3, 12))
