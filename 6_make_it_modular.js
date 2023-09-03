const mymodule = require('./mymodule')
path = process.argv[2];
suffix = process.argv[3];
function print_err(err, data){
    if (err){
        console.error(err)
    }
    else {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    }
    
}
mymodule(path, suffix, print_err);