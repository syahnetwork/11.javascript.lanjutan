function callRegExp(value) {

  if (/html/.test(value) || /css/.test(value)) {
    console.log(value);
  } else {
    console.log('Belajar');
  }
}

callRegExp("Belajar html");
callRegExp("Belajar javascript");
callRegExp("Belajar css");
callRegExp("Belajar php");