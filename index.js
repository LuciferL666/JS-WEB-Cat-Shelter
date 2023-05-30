const http = require('http');
const homeHtml = require('./views/home/index') 
const siteCss = require('./content/styles/site')

const PORT = 5000

const server = http.createServer(async (req, res) =>{
//const url = req.url;
console.log(req.url);

if(req.url == '/'){
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    res.write(homeHtml);
} else if (req.url == '/content/styles/site.css'){
    res.writeHead(200, { 'Content-Type' : 'text/css' })
        res.write(siteCss)
}

res.end()
});






server.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));