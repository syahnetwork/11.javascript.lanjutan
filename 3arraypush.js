callPush = () => {
  let kota = ['jakarta', 'bandung', 'bogor', 'yogyakarta']
  console.log(kota)
  console.log('===============')

  // kota = kota.shift()
  let kota2 = kota.push('semarang')
  console.log(kota2) //returns length
  console.log(kota)
}

callPush()