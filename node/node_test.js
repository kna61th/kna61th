var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, 'kna61th.github.io');
console.log('Server running at http://kna61th.github.io:1337/');