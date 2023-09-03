const http = require('node:http')
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const bl = require('bl')
http.get(url1, function (response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err)
        }
        console.log(data.toString())
    }))
})
http.get(url2, function (response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err)
        }
        console.log(data.toString())
    }))
})
http.get(url3, function (response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err)
        }
        console.log(data.toString())
    }))
})