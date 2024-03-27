const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url);

  // If the URL is the root path (/), serve index.html
  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  }

  // Add file extension if it's missing
  if (!path.extname(filePath)) {
    filePath += '.html'; // Assuming CSS files have .css extension
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(`<h1>404 Not Found</h1><p>The requested resource ${filePath} was not found.</p>`);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'text/plain';

      if (ext === '.html') {
        contentType = 'text/html';
      } else if (ext === '.css') {
        contentType = 'text/css'; // Set content type for CSS files
      } else if (ext === '.js') {
        contentType = 'application/javascript';
      }

      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
