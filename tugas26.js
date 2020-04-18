let num = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

let test = num.forEach((element) => {
  (isFinite(element)) ? console.log('angka ' + element + ' not infinity') : console.log('angka ' + element + ' is infinity')
});
