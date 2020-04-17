let num1 = [5, 12, 8, 120, 44]

let found = num1.find((element) => {
  return element > 8
})

console.log(found)

//find index

isLargeNumber = (element) => {
  return element > 100
}

console.log(num1.findIndex(isLargeNumber))