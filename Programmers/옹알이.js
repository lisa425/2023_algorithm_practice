/*
[새로 알게된 것] 
includes(단어.repeat(n)) => 단어가 n개 반복되는 지 알 수 있다!! 
ex)ye.repeat(2) 하면 yeye가 됨. ye가 두번 이상 반복되는 부분이 있는지 알 수 있음. 
   그럼 해당 부분은 대치 대상에서 제외하는 것
replaceAll: 일치하는 모든 단어들을 대치시킨다.

[풀이 중 생각 못한 부분]
문자열을 제거하다가 발음 가능한 문자가 될 수 있다. 
이를 방지하기 위해 ""이 아닌 " "로 공백 처리를 해준 후 최종 join()!
*/
function solution(babbling) {
  const can = ['aya', 'ye', 'woo', 'ma']
  let answer = 0

  babbling.forEach((word) => {
    for (let i = 0; i < can.length; i++) {
      if (word.includes(can[i].repeat(2))) {
        break
      }
      word = word.replaceAll(can[i], ' ')
    }

    //바로 조인 불가, 공백 부분을 split 후 join("")해주면 최종적으로 남은 단어만 보게됨.
    if (word.split(' ').join('').length === 0) {
      answer += 1
    }
  })

  return answer
}

console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']))

//정규식 풀이(실패했던..)
function solution2(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/
  /*
    (aya|ye|woo|ma): 그룹 1, aya, ye, woo, ma 중 하나에 해당하는 문자열을 찾는다.
    \1+: 그룹 1(aya, ye, woo, ma 중 하나)와 동일한 패턴이 '연속적으로' 반복되는지를 찾는다.
      \1 : 그룹 1을 참조한다는 뜻.
      +: 참조된 그룹이 하나 이상 반복되는가?
    ex) yeye: (ye)와 일치하는 부분이 있고, 그 뒤 ye가 다시 반복되므로 이 조건에 부합.

    내 풀이의 'if (word.includes(can[i].repeat(2)))' 부분과 동일한 동작
  */
  const regexp2 = /^(aya|ye|woo|ma)+$/
  /*
    ^: 문자열의 시작
    (aya|ye|woo|ma)+ : aya, ye, woo, ma 중 하나가 하나 이상 반복(존재)하는가?
    $: 문자열의 끝
    => 문자열의 시작과 끝까지 검사해서 주어진 문자열이 aya, ye, woo, ma로만 구성되어있는지 체크
    만약 다른 문자가 포함되어있으면 통과 못함.
    
    내 풀이의 'word = word.replaceAll(can[i], ' ')' 부분과 유사한 역할.
  */

  /* 정규식 관련 궁금증 QNA
  (aya|ye|woo|ma) 의 순서도 검사하는가? 
    -> 순서는 검사하지 않는다. 네 가지 패턴의 존재 여부만 체크
  \1 하나의 여부로 달라지는 부분: 
    \1은 특정 패턴이 매칭된 후, 동일한 패턴이 바로 뒤에 반복되어야 한다.
    여기서 패턴은 문자열을 의미함. ye를 참조했다면 바로 뒤에 ye가 나와야 한다는 것!
    따라서 \1이 없는 두번째 정규식에서는 연속 단어를 체크하지 않음.
  */

  /* 이제 단어를 정규식에 적용한다!
    연속적인 단어가 없으며(!regexp1) &&
    aya, ye, woo, ma 로만 이루어진 단어라면(regexp2)
    ? answer를 1 증감한다.
    : 그렇지 않다면 유지한다.
  */
  return babbling.reduce((answer, word) => (!regexp1.test(word) && regexp2.test(word) ? ++answer : answer), 0)
}
