var http = require('http');
var port = process.env.PORT || 3000;

const axios = require('axios');
const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Hello World</h2>");    
  res.end();
}).listen(port);

