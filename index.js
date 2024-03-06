const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url);

  // If the URL is the root path (/), serve index.html
  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  }

  // Add file extension if it's missing
  if (!path.extname(filePath)) {
    filePath += '.js';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      res.statusCode = 500;
      res.end(`Error reading file ${filePath}`);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'text/plain';

      if (ext === '.js') {
        contentType = 'application/javascript';
      } else if (ext === '.html') {
        contentType = 'text/html';
      }

      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
