const express = require('express')

const app = express();
app.set("view engine", 'ejs')


// this are built in middlewares to show data on console
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// this build in middleware is used to use file which does not require authentication
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index')
})


// in this route we fetch or get all the data from the form
app.post('/get-form-data', (req, res) => {
    console.log(req.body)
    res.send("data received")
})




app.listen(3000)