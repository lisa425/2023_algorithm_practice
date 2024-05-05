function solution(arr1, arr2) {
  const arr3 = []

  for (let i = 0; i < arr1.length; i++) {
    let col = []
    for (let j = 0; j < arr1[i].length; j++) {
      col.push(arr1[i][j] + arr2[i][j])
    }
    arr3.push(col)
  }

  return arr3
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
)
