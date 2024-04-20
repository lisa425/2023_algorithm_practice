function solution(x) {
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => Number(acc) + Number(cur))

  return x % sum === 0 ? true : false
}

function solution2(x) {
  let sum = 0
  do {
    sum += x % 10
    x = Math.floor(x / 10)
  } while (x > 0)

  return x % sum === 0 ? true : false
}

console.log(solution2(121))
