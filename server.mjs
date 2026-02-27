import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';
const root = process.cwd();

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml'
};

const serve = async (path) => {
  try {
    return await readFile(path);
  } catch {
    return null;
  }
};

const server = createServer(async (req, res) => {
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
});

server.listen(port, host, () => {
  console.log(`Preview server running at http://localhost:${port}`);
  console.log(`Network access: http://${host}:${port}`);
});

server.on('error', (error) => {
  if (error && typeof error === 'object' && 'code' in error && error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Stop the existing process or run with PORT=<another_port>.`);
  } else {
    console.error('Failed to start preview server:', error);
  }
  process.exit(1);
});
