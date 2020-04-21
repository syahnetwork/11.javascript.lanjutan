reverseWordFor = (str) => {
  let word = ''

  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i]
  }
  return word
}

console.log(reverseWordFor('borat'))
console.log(reverseWordFor('borat is nice'))

reverseWhile = (str) => {
  let word = ''
  let i = str.length - 1

  while (i >= 0) {
    word += str[i]
    i--
  }
  return word
}

console.log(reverseWhile('great success'))
console.log(reverseWhile('borat is great success'))