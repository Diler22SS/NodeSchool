const fs = require('fs');
let n = undefined;
function find_n(callback){
    fs.readFile(process.argv[2], function doneReading(err, fileContent) {
        s = fileContent.toString().split('\n');
        n = s.length - 1;
        callback(n)
    });
    
}

function my_func(num){
    console.log(num);
}


find_n(my_func);
