function solution(s) {
  s = s.toLowerCase()

  let countP = Array.from(s).reduce(
    (cnt, element) => cnt + ('p' === element),
    0
  )
  let countY = Array.from(s).reduce(
    (cnt, element) => cnt + ('y' === element),
    0
  )

  return countP === countY ? true : false
}

function solution2(s) {
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
}

function solution3(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === 'p') return acc + 1
    else if (cur === 'y') return acc - 1
    return acc
  }, 0)
    ? false
    : true
}
