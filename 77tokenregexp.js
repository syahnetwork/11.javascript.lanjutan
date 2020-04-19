let s = 'ini ibu budi \n bukan bapaknya.'
let re = /./g
console.log(s.match(re))

let s2 = 'sempurna..'
let re2 = /\./g
console.log(s2.match(re2))

let s3 = 'abCD123 efg456 !@#$%^_'

//sembarang angka,1 digit, 0-9 , angka
console.log(s3.match(/\d/g))

//selain angka
console.log(s3.match(/\D/g))

//angka, huruf, underscore
console.log(s3.match(/\w/g))

//selain angka, huruf dan underscore
console.log(s3.match(/\W/g))

//whitespace
console.log(s3.match(/\s/g))