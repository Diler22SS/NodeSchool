const net = require('net');

// Порт сервера для прослушивания (получаемый в качестве аргумента командной строки)
const PORT = process.argv[2];
function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
  }
// Создаем TCP сервер
function now () {
    const d = new Date()
    return d.getFullYear() + '-' +
      zeroFill(d.getMonth() + 1) + '-' +
      zeroFill(d.getDate()) + ' ' +
      zeroFill(d.getHours()) + ':' +
      zeroFill(d.getMinutes())
  }

const server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})
server.listen(Number(PORT));
