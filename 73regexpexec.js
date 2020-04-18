callRegExp = () => {
  let data = 'learn javascript in one day, mental hospital want to know your location'

  let str = new RegExp('mental')

  console.log(str.exec(data))
}

callRegExp()