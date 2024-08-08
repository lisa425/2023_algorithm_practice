function solution(nums) {
  let choiceLen = nums.length / 2
  nums = Array.from(new Set(nums))

  return choiceLen >= nums.length ? nums.length : choiceLen
}

console.log(solution([3, 1, 2, 3, 5, 1, 6, 7]))
