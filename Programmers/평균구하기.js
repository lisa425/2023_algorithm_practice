function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

console.log(solution([5, 5]))
