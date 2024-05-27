function solution(n, arr1, arr2) {
  const code_arr = []

  for (let i = 0; i < n; i++) {
    let num1 = arr1[i].toString(2).padStart(n, '0')
    let num2 = arr2[i].toString(2).padStart(n, '0')

    let str = ''

    for (let j = 0; j < n; j++) {
      if (num1[j] == 0 && num2[j] == 0) {
        str += ' '
      } else {
        str += '#'
      }
    }

    code_arr.push(str)
  }
  return code_arr
}
