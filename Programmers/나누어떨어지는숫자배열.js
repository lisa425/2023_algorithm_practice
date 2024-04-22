function solution(arr, divisor) {
  let answer = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i])
    }
  }

  if (answer.length === 0) {
    answer.push(-1)
  }

  answer.sort((a, b) => a - b)

  return answer
}

function solution2(arr, divisor) {
  let answer = arr.filter((num) => num % divisor === 0)
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
}

console.log(solution2([5, 9, 7, 10], 5))
