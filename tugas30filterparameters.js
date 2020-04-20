callFilterParameter = (value) => {
  let arr = [
    { negara: 'indonesia', benua: 'asia' },
    { negara: 'jerman', benua: 'eropa' },
    { negara: 'spanyol', benua: 'eropa' },
    { negara: 'korea', benua: 'asia' },
    { negara: 'portugal', benua: 'eropa' },
    { negara: 'amerika', benua: 'amerika' }
  ]

  let benua = arr.filter((item) => {
    return item.benua === value
  })
  console.log(benua)
}

callFilterParameter('eropa')