callNestedArray = (value) => {

  for (let index = 0; index < value.length; index++) {
    console.log('id = ', value[index][0])
    console.log('name = ', value[index][1])
    console.log('company = ', value[index][2])
    console.log('\n')

  }

}

let nestedArray = [
  [1, 'mark', 'facebook'],
  [2, 'musk', 'tesla'],
  [3, 'bill', 'microsoft'],
  [4, 'jobs', 'apple']
]

callNestedArray(nestedArray)