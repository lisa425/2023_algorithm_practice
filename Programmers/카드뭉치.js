function solution(cards1, cards2, goal) {
  let pointer1 = 0
  let pointer2 = 0

  for (let i = 0; i < goal.length; i++) {
    if (cards1[pointer1] === goal[i]) {
      pointer1++
    } else if (cards2[pointer2] === goal[i]) {
      pointer2++
    } else {
      return 'No'
    }
  }
  return 'Yes'
}

console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']))

//투포인터 방식으로 접근, shift()를 쓴 방법보다 효율적이다. 항상 O(n)의 시간복잡도를 가짐.
//shift()는 배열이 길이에 따라 연산이 반복되서 최악의 경우 O(n^2), 변수를 따로 안써도 되지만 효율성은 떨어짐.
