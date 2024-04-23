function solution(phone_number) {
  if (phone_number.length === 4) return phone_number

  let masking = ''

  for (let i = 0; i < phone_number.length - 4; i++) {
    masking += '*'
  }

  return (
    masking + phone_number.slice(phone_number.length - 4, phone_number.length)
  )
}

function solution2(s) {
  //정규표현식 풀이
  return s.replace(/\d(?=\d{4})/g, '*')
}

function solution3(s) {
  //String.prototype.repeat() : 문자열을 주어진 횟수만큼 반복해 붙힌 새로운 문자열을 반환.
  //slice(-4) : 음수 인덱스는 마지막부터 카운트. 마지막 4글자를 slice하여 붙힘.
  let result = '*'.repeat(s.length - 4) + s.slice(-4)
  //substring: string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
  //substring 메소드로 풀었을 수도 있을 것 같음.
  return result
}

//배열 풀이: 문자열을 배열로 바꾼 뒤 0 ~ 뒤에서 4번째 전 요소까지 *로 채운다. 그리고 join으로 문자열로 만듬
const solution4 = (n) => [...n].fill('*', 0, n.length - 4).join('')

console.log(solution('027778888'))
