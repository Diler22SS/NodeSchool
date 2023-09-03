const http = require('node:http')
const url = process.argv[2];
const bl = require('bl')
http.get(url, function (response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err)
        }
        console.log(data.toString().length)
        console.log(data.toString())
    }))

})