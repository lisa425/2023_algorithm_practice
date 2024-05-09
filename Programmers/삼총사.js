function solution(number) {
  let count = 0

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        console.log(`i: ${i}, j: ${j}, k:${k}`)
        console.log(number[i], number[j], number[k])
        if (number[i] + number[j] + number[k] === 0) {
          count++
          console.log('count + 1', count)
        }
      }
    }
  }
  return count
}

console.log(solution([-1, 1, -1, 1]))
