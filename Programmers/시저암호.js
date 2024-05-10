function solution(s, n) {
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  )

  let newWord = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      newWord += ' '
    } else {
      const isUpper = s[i].toLowerCase() !== s[i]
      const index = alphabet.indexOf(s[i].toLowerCase()) + n
      const pointer = index >= alphabet.length ? index - alphabet.length : index

      newWord += isUpper ? alphabet[pointer].toUpperCase() : alphabet[pointer]
    }
  }

  return newWord
}
