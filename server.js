const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	console.log("req.url = "+req.url);
	if(req.url == '/favicon.ico'){
		res.writeHead(200, { 'content-type': 'image/x-icon' })
  		fs.createReadStream('favicon.ico').pipe(res)
  		return;
  	}
  	if(req.url == '/wallpaper.jpg'){
		res.writeHead(200, { 'content-type': 'image/jpg' })
  		fs.createReadStream('wallpaper.jpg').pipe(res)
  		return;
  	}
	if(req.url == '/index.js'){
		res.writeHead(200, { 'content-type': 'text/javascript' })
  		fs.createReadStream('index.js').pipe(res)
  		return;
  	}
  	if(req.url == '/angular.min.js'){
		res.writeHead(200, { 'content-type': 'text/javascript' })
  		fs.createReadStream('angular.min.js').pipe(res)
  		return;
  	}
	if(req.url == '/index.css'){
		res.writeHead(200, { 'content-type': 'text/css' })
  		fs.createReadStream('index.css').pipe(res)
  		return;
  	}
  	res.writeHead(200, { 'content-type': 'text/html' })
	fs.createReadStream('index.html').pipe(res)
	return;
});


server.listen(process.env.PORT || 3000);