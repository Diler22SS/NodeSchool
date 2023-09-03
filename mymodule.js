const fs = require('fs');
let array = []
module.exports = function (path_dir, suffix_file, callback){
    fs.readdir(path_dir, function doneReading(err, list) {
        if (err){
            return callback(err)
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i].indexOf('.' + suffix_file) != -1){
                array.push(list[i])
            }
        }
        callback(null, array)
    });
    
}
