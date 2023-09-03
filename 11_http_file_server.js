const http = require('http');
const fs = require('fs');

const PORT = process.argv[2];

const FILE_PATH = process.argv[3];

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(FILE_PATH);
    readStream.pipe(res);
});

server.listen(Number(PORT));
