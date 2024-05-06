function solution(s) {
  const arr = []

  s.split(' ').forEach((word) => {
    let newWord = ''
    for (let i = 0; i < word.length; i++) {
      if (i % 2 !== 0) {
        newWord += word[i].toLowerCase()
      } else {
        newWord += word[i].toUpperCase()
      }
    }
    arr.push(newWord)
  })

  return arr.join(' ')
}

console.log(solution('try hello world'))
