const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// Register the close callback
server.on('close', () => {
  console.log('Server closed');
  // Perform cleanup tasks or execute additional logic here
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Simulate server shutdown after 5 seconds
setTimeout(() => {
  server.close(); // Triggers the close event
}, 5000);
