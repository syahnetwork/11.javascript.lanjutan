reverseWord = (str) => {
  return str
    .split('')
    .reverse()
    .join('')
}

console.log(reverseWord('borat'))
console.log(reverseWord('borat is nice'))