function solution(arr) {
  if (arr.length === 1) return [-1]

  let smallest = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[smallest]) {
      smallest = i
    }
  }

  arr.splice(smallest, 1)
  return arr
}

function solution2(arr) {
  //Math.min : 주어진 숫자들 중 가장 작은 값을 반환.
  //... : spread 연산자로 배열의 값을 숫자로 전개하여 min 메서드에 전달하면 최소값을 구할 수 있다.
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  if (arr.length < 1) return [-1]
  return arr
}

console.log(solution2([4, 3, 2, 7, 1, 5]))
