const net = require('net');

const server = net.createServer();

const port = 3000;
const host = 'localhost';

server.on('connection', (socket) => {
  console.log('A client has connected.');

  socket.on('data', (data) => {
    console.log('Received data:', data.toString());

    // Example response to the client
    socket.write('Server says: Hello client!');
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
