testRegExp = () => {
  let str = 'abcdefghijkLmno'

  console.log(str.search(/K/))
  console.log(str.search(/K/i))
  console.log(str.search(/k/i))
  console.log(str.search(/l/i))
}

testRegExp()