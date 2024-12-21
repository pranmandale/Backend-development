// we are creating server using express in this file
const express = require('express')

// express() is a toolbox which is closed like box when we call it as function it openes
// and provides tool for creating server and stores these tools in app variable
const app = express();

// get is a tool
app.get('/', (req,res)=> {
    res.send('Hello world this is express')
})

app.get('/about', (req,res) => {
    res.send("this is about page in express server")
})

app.get('/profile', (req,res) => {
    res.send("profile page")
})

app.listen(3000)