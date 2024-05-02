function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i
  }

  return money >= 0 ? 0 : Math.abs(money)
}
console.log(solution(3, 20, 4))
