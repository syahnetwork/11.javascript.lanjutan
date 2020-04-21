deretAngka = (num) => {
  let word = ''
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      word += 'borat '

    } else if (i % 5 === 0) {
      word += 'nice '
    } else {
      word += i + ' '
    }
  }
  return word
}

// deretAngka(10)
console.log(deretAngka(10))