import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const port = Number(process.env.PORT || 3000);
const root = process.cwd();

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml'
};

const serve = async (path) => {
  try {
    const file = await readFile(path);
    return file;
  } catch {
    return null;
  }
};

createServer(async (req, res) => {
  const url = req.url || '/';
  const filePath = url === '/' ? join(root, 'static', 'index.html') : join(root, 'static', url.replace(/^\//, ''));
  const file = await serve(filePath);

  if (!file) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  res.setHeader('Content-Type', mime[extname(filePath)] || 'application/octet-stream');
  res.end(file);
}).listen(port, () => {
  console.log(`Preview server running at http://localhost:${port}`);
});
