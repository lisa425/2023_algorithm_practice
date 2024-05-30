function solution(food) {
  let left = ''

  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2)
    left += i.toString().repeat(count)
  }

  let right = '0' + left.split('').reverse().join('')

  return left + right
}
