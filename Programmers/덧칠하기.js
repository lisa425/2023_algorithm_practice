function solution(n, m, section) {
  let answer = 0
  let painted = 0

  for (let i = 0; i < section.length; i++) {
    if (painted < section[i]) {
      //여태 칠해진 벽보다 앞으로 칠해야 할 벽의 값이 높으면 실행되는 조건문.
      //2를 칠할 차례라면 2 + 3(m-1)해서 5까지 칠해지고 painted는 5가 됨.
      //그러면 이 if문은 section[i]가 2일때 실행 후 painted를 5로 바꾸고, 3일 땐 건너뛰고 6을 바라보고 있을 때 한번 더 실행됨.
      painted = section[i] + m - 1 //칠해야 할 구역부터 +m까지 페인트칠을 한번 함. 즉, 페인팅 된 마지막 벽을 의미.
      answer++
    }
  }
}

console.log(solution(8, 4, [2, 3, 6]))
