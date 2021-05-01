var http = require('http');
var port = process.env.PORT || 3000;
var qs = require('querystring');

//const axios = require('axios');
//const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';


http.createServer(function (req, res) {

    if (req.url == "/")  {
      file = 'index.html';
      fs.readFile(file, function(err, txt) {
        res.writeHead(200, {'Content-Type': 'text/html'});  
        
        res.write("This is the home page<br>");          
        res.write(txt);          
        res.end();  }); 
    }
  
  else if (req.url == "/process")  { 
    res.writeHead(200, {'Content-Type':'text/html'}); 
    res.write ("Process the form<br>"); 
    pdata = ""; req.on('data', data => {           
      pdata += data.toString();         });// when complete POST data is received
    
    req.on('end', () => {
      pdata = qs.parse(pdata);
      res.write ("The name is: "+ pdata['the_name']);
      res.end();
    });  }  
  
  else   {
    res.writeHead(200, {'Content-Type':'text/html'});  
    res.write ("Unknown page request"); 
    res.end();  
  }
  
  
  
  
  
}).listen(port);

