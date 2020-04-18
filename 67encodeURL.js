let uri = 'my test.asp?name=stale&car=saab borat'
let res = encodeURI(uri)

console.log(res)

let decode = decodeURI(res)
console.log(decode)