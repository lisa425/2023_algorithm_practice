function solution(N, stages) {
  //각 스테이지 별 실패율을 담을 해시 생성, 1~N까지 순서대로 키가 생성됨.
  let stageHash = Object.fromEntries(Array.from({ length: N }, (_, i) => [i + 1, 0]))
  //게임에 참여중인 유저 수
  let user = stages.length

  //각 스테이지를 순차적으로 순회할 것임.
  Object.entries(stageHash).forEach((obj) => {
    //각 스테이지의 도전자 수를 계산
    const challenger = stages.filter((value) => value == obj[0]).length

    //도전자가 있는 경우(없는 경우는 계산을 건너뛰기 위함)
    if (challenger) {
      //실패율 = 스테이지 도전중인 유저 / 스테이지에 도달한 플레이어 수
      const failRate = challenger / user
      stageHash[obj[0]] = failRate //해시에 실패율을 저장

      //전체 유저에서 해당 스테이지 도전자 수만큼 뺀다. 그래야 다음 스테이지 계산이 가능함.
      user = user - challenger
    }
  })

  //이제 해시를 정렬한다.
  let answer = Object.entries(stageHash)
    .sort((a, b) => b[1] - a[1]) //먼저 value를 기준으로 해시를 정렬.
    .map((v) => Number(v[0])) //그 다음 map을 통해 정렬된 key들을 추출하여 배열을 만든다.

  return answer
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
