let a = 'no'
let b = 'rumah saya'
let c = '30'
let d = 'a'

let merge = []
merge.push(a, b, c)
let myWords = merge.join(' '.toString()) + d
// let myWords = merge.reduce((accumulator, currentValue) => {
//   return accumulator + ' ' + currentValue
// })
// merge.concat(a, b, c, d)
console.log(myWords)