function solution(k, score) {
  let result = []
  let gallery = []

  for (let i = 0; i < score.length; i++) {
    if (gallery.length < k) {
      gallery.push(score[i])
    } else {
      let min = Math.min(...gallery)
      if (min < score[i]) {
        gallery.splice(gallery.indexOf(min), 1)
        gallery.push(score[i])
      }
    }

    result.push(Math.min(...gallery))
  }

  return result
}

console.log(solution2(3, [10, 100, 20, 150, 1, 100, 200]))

//stack 활용
function solution2(k, score) {
  const stack = []

  return score.reduce((a, c) => {
    if (stack.length < k) {
      //k개 미만인 경우 값 넣고 정렬
      stack.push(c)
      stack.sort((a, b) => a - b)
    } else {
      //k개 이상인 경우 값 넣고 정렬 후 제일 작아서 밀려날 값을 뽑아냄.(shift)
      stack.push(c)
      stack.sort((a, b) => a - b)
      stack.shift()
    }
    a.push(stack[0]) //최소값을 a 배열에 누적
    return a
  }, []) //초기값을 배열로 제공하여 a가 배열임을 보장하기 때문에 push 메서드를 사용할 수 있다!
}
