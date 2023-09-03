const fs = require('fs');
let buf = fs.readFile(process.argv[2]);
const str = buf.toString();
n = str.split('\n')
console.log(n.length - 1)