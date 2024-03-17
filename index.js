const http = require('http');

const port = 8900;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome Naomi Frank');
});

server.listen(port, () => {
  console.log(`Server running at port:${hostname}:${port}`);
});
