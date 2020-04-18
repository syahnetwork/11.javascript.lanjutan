callNumber = () => {
  let a = '9'
  let b = 3

  hasil = a + b
  console.log(hasil + typeof hasil)

  hasil2 = Number(a) + b
  console.log(hasil2 + typeof hasil2)
}

callNumber()

callParseInt = () => {
  let a = '13.78'
  let b = '9 naga'
  let c = '100.99 meter'

  hasil1 = parseInt(a)
  console.log(hasil1 + typeof hasil1)

  hasil2 = parseInt(b)
  console.log(hasil2 + typeof hasil2)

  hasil3 = parseFloat(a)
  console.log(hasil3 + typeof hasil3)
}

callParseInt()