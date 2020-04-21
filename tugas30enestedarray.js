callNestedArray = (value) => {
  let a = [], b = [], c = [], d = []

  value.map((x) => {
    a.push(x[0])
    b.push(x[1])
    c.push(x[2])
    d.push(x[3])
  })

  let newVar = [a, b, c, d]
  console.log(newVar)
}

let nestedArray = [
  [1, 2, 3, 4],
  ['mark', 'musk', 'gates', 'jobs'],
  ['facebook', 'tesla', 'microsoft', 'apple']
]

callNestedArray(nestedArray)