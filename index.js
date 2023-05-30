const http = require('http');
const homeHtml = require('./views/home/index') 

const PORT = 5000

const server = http.createServer(async (req, res) =>{

    res.write()
    res.end(homeHtml)
})






app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));