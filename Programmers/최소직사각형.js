function solution(sizes) {
  let maxWidth = 0
  let maxHeight = 0

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let tmp = sizes[i][0]
      sizes[i][0] = sizes[i][1]
      sizes[i][1] = tmp
    }

    if (sizes[i][0] > maxWidth) {
      maxWidth = sizes[i][0]
    }
    if (sizes[i][1] > maxHeight) {
      maxHeight = sizes[i][1]
    }
  }

  return maxWidth * maxHeight
}
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
)
