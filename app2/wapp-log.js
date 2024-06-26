const http = require('http');
const fs = require('fs');
const os = require('os');

console.log("Tiny http server starting...");

var handler = function(request, response) {

  const addr = request.connection.remoteAddress;	
  const dt = new Date();
 	
  response.writeHead(200);

  const host_name =  os.hostname();
  const host_ip = request.connection.localAddress;	
  
  const log_dir='/var/wapp/logs';

  const txt = dt +  "--> request from: " + addr + " to host: " +host_name;
  console.log(txt);
  fs.writeFile(`${log_dir}/wapp.log`, `${txt}\n`, {flag: 'a+'}, err={});

  
  const dock_host = process.env.DOCK_HOST;

  var body = 
  `<html>
     <head>
       <title>SITE: ${host_name}</title>
     </head>
     <body>
     <h1>Salute, Andrei!</h1>
   <h1>Welcome to docker host: ${dock_host}</h1>
     <h2>Container id: ${host_name}</h2>
     <h2>Container ip: ${host_ip}</h2>
     <div style="color:green;">
       	<h3>Accessed from: ${addr} </h3>
     	<h3>${dt}</h3>
     </div>
     </body>
     </html>`;

  response.end(body);
};

var www = http.createServer(handler);
www.listen(8080);
                    
