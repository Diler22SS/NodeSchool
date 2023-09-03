const http = require('node:http')
const url = process.argv[2];

http.get(url, function (response) {
    response.on('data', function (data) {
        console.log(data.toString())
    })
    response.on('error', function (error) {
        console.error(error)
    })
}).on('error', console.error)
