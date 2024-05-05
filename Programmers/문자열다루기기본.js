function solution(s) {
  const reg = /[a-zA-Z]/

  if (s.length === 4 || s.length == 6) {
    return s.match(reg) !== null ? false : true
  } else {
    return false
  }
}

function solution2(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false
}

console.log(solution2('1236'))
