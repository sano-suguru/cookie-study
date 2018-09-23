'use strict'
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  res.setHeader('Set-Cookie', `last_access=${now};`);
  const cookie = req.headers.cookie;
  const last_access_time = cookie
    ? parseInt(cookie.split('last_access=')[1])
    : now;
  res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});