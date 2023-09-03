const fs = require('fs');
path = process.argv[2];
suffix = process.argv[3];

function filtered(path_dir, suffix_file){
    fs.readdir(path_dir, function doneReading(err, list) {
        if (err){
            return console.error(err)
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i].indexOf('.' + suffix_file) != -1){
                console.log(list[i]);
            }
        }
    });
    
}

filtered(path, suffix);
