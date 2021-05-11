const http = require('http');
const appRequest = require('./fileApp');
const port = process.env.PORT || 3000;
const server = http.createServer(appRequest);
server.listen(port);

