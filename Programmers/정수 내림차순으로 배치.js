//문자풀이
function solution(n) {
  return parseInt(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .map((num) => Number(num))
      .join('')
  )
}

//숫자풀이
function solution2(n) {
  let nums = []
  do {
    //1의 자릿수부터 순서대로 배열에 삽입(reverse)
    nums.push(n % 10)
    n = Math.floor(n / 10)
  } while (n > 0)

  //*1을 곱해 join에서 문자열이 된 것을 숫자로 다시 형변환
  return nums.sort((a, b) => b - a).join('') * 1
}

console.log(solution2(118372))
