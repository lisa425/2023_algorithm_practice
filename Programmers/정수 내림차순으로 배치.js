function solution(n) {
  return parseInt(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .map((num) => Number(num))
      .join('')
  )
}

function solution2(n) {
  let nums = []
  do {
    //1의 자릿수부터 순서대로 배열에 삽입(reverse)
    nums.push(n % 10)
    n = Math.floor(n / 10)
  } while (n > 0)

  return nums.sort((a, b) => b - a).join('') * 1
}

console.log(solution2(118372))
