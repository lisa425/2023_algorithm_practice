function solution(x, n) {
  const nums = []
  for (let i = 0; i < n; i++) {
    nums.push(x + x * i)
  }
  return nums
}

function solution2(x, n) {
  return Array(n)
    .fill(x)
    .map((num, i) => (i + 1) * num)
}

console.log(solution(-4, 2))
