let num = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
console.log('sebelumnya = ' + num)
let test = [1, 2]
let num1 = num.sort()
console.log('Ascending = ' + num1)

let num2 = num.reverse()
console.log('Descending = ' + num2)

let num3 = num.filter((number) => {
  return number > 10
})
console.log('Filter > 10 = ' + num3)
console.log(typeof num3)
console.log(typeof num2)
console.log(typeof num)
console.log(typeof test)