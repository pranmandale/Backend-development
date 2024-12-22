// we are creating server using express in this file
const express = require('express')
const morgan = require('morgan')

// express() is a toolbox which is closed like box which consist of different tools when we call it as function it openes
// and provides tool for creating server and stores these tools in app variable
const app = express();

// it gives all the info of the request 
// like method, url, time 
app.use(morgan('dev'))

app.set("view engine", 'ejs');

// middleware 
// if any of below route is going to fetch before this middleware execute
// app.use((req, res, next) => {
//     console.log("this is middleware")
//     return next()
// })

// get is a tool
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.send("this is about page in express server")
})

app.get('/profile', (req, res) => {
    res.send("profile page")
})
    ;
app.listen(3000)