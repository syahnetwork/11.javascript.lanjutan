let peoples = [{
  name: "andi",
  gender: 'male'
}, {
  name: 'siti',
  gender: 'female'
}, {
  name: 'cindy',
  gender: 'female'
}]

let female = peoples.filter(peoples => {
  return peoples.gender === 'female'
})

console.log(female)
console.log(typeof peoples)