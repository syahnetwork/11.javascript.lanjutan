const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(array1.reduce(reducer))

console.log(array1.reduce(reducer, 5))

//reduce right

const array2 = [[0, 1], [2, 3], [5, 7]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))

console.log(array2)