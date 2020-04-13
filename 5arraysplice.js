callSplice = () => {
  let kota = ['jakarta', 'bandung', 'bogor', 'yogyakarta']
  console.log(kota)
  console.log('===============')


  let kota2 = kota.splice(2, 0, 'semarang')
  console.log(kota)
  kota.splice(1, 1)
  // console.log(kota2)
  console.log(kota)
}

callSplice()