const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        let str = '';

        req.on('data', function (chunk) {
            str += chunk.toString();
        });

        req.on('end', function() {
            const convertedData = str.toUpperCase();
            res.write(convertedData);
            res.end();
        });
    } 
    else {
        res.end();
    }
});
server.listen(Number(port));
