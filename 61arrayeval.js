callEval = () => {
  let num = [1, 2, 3, 4, 5, 6, 7]
  let total = 0

  for (let i = 0; i < num.length; i++) {
    total += num[i]

  }
  console.log(eval(total))
}

callEval()