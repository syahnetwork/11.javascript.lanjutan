deretAngka = (num) => {
  let word = ''
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      word += 'boratnice '
    } else if (index % 3 === 0) {
      word += 'borat '
    } else if (index % 5 === 0) {
      word += 'nice '
    } else {
      word += index + ' '
    }

  }
  return word
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))