function solution(left, right) {
  let answer = 0

  for (let i = left; i <= right; i++) {
    answer = getIsOddDivisor(i) ? answer - i : answer + i
  }

  return answer
}

function getIsOddDivisor(number) {
  //약수의 개수가 홀수면 true, 아니면 false
  let index = 1
  let divisorCount = 0

  while (index <= number) {
    if (number % index == 0) {
      divisorCount += 1
    }
    index += 1
  }

  return divisorCount % 2 ? true : false
}

function solution2(left, right) {
  var answer = 0
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      //제곱근이 정수면 약수의 개수가 홀수다!!
      answer -= i
    } else {
      answer += i
    }
  }
  return answer
}

console.log(solution(10, 330))
