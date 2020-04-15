minimum = () => {
  let nums1 = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]

  let lowest = Math.min(...nums1)
  console.log('nilai minimal = ' + lowest)
}

maximum = () => {
  let nums1 = [45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5]

  let highest = Math.max(...nums1)
  console.log('nilai maksimal = ' + highest)
}

minimum()
maximum()
