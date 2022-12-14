const http = require('http');
const fs = require('fs');
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('pages/home.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About</h1>');
    res.end();
  } else if (req.url === '/create-file') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const data = '<h1>Create a file</h1>';
    fs.writeFile('temp/temp.html', data, (err) => {
      if (err) throw err;
      res.write('file is created');
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(PORT);
