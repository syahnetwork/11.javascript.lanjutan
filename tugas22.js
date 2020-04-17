tugas22 = () => {
  let word = 'Saya ingin belajar bersama'

  let arrayWord = word.split(' ')

  arrayWord.forEach((value, index) => {
    console.log('Item : ' + value + ' index ke ' + index)
    // console.log('Item : ' + value + ' index ke ' + index)
  })
}

tugas22()