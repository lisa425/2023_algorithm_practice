function solution(a, b, n) {
  let changeTotal = 0 // 받은 병 개수

  while (n >= a) {
    let change = Math.floor(n / a) * b
    let remain = n % a
    changeTotal += change
    n = change + remain
  }

  return changeTotal
}

console.log(solution(3, 2, 20))

//거의 가깝게 풀었는데 아쉽다ㅠㅠ
//Math.floor를 몫 구하는 위치에만 적용해야 했고, 받은 병의 개수만 계산해내면 된다는 점을 고려하지 못했음.
