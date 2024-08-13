function solution(n) {
  //0,1은 소수가 아니라고 미리 설정(false)
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2)

  //i*i가 n보다 큰 경우는 의미 없음.n보다 작을때만 반복하도록 설정.
  for (let i = 2; i * i <= n; i++) {
    //arr[i]가 true라면
    if (arr[i]) {
      //배수 제거,i보다 작은 수의 배수는 이미 제거되었으니까 i*i부터 시작, n보다 큰 수는 의미 없으니까 제한은 n
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }

  return arr.map((v, i) => (v ? i : 0)).filter((e) => e).length
}
