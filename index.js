const http = require('http')

// create server
const server = http.createServer((req,res) => {
   if(req.url === "/about") {
    res.end("Hello about page")
   }
   else if (req.url === "/profile") {
    res.end("hello this is profile page")
   }
   else if(req.url === '/contact') {
    res.end("this is contact page")
   }
   else {
    res.end("Home page")
   }
})


// to run server
server.listen(3000)