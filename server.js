const express = require('express')


const app = express();

 const db = require('./config/db.js')
const userModel = require('./models/user.js')

app.set("view engine", 'ejs')


// this are built in middlewares to show data on console
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// this built in middleware is used to use file which does not require authentication
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('index')
})

// this regisster route shows the form
app.get('/register', (req,res) => {
    res.render('register')
})


// basic CRUD operations
// 1- create user
// this post register route sends data from frontend form to database
app.post('/register', async(req, res) => {

    console.log(req.body)
    const { username, email, password } = req.body

   const newUser = await userModel.create({
        username: username,
        email: email,
        password: password,
    })
    res.send(newUser)
})   

// 2- Read user data
// find returns an empty array if any data not found
// findOne returns null if any data not found
app.get('/get-user', (req, res) => {
    userModel.find({
        username : "pranav"
    }).then((users) => {
        res.send(users)
    })
})

// 3- Update operations
app.get('/update-user',async (req, res) => {
    await userModel.findOneAndUpdate({
        username : "pranav",
    }, {
        email: "pranav@google.com",
    })

    res.send("user updated")
})

// 4-Delete
app.get('/delete-user', async (req, res) => {
    await userModel.findOneAndDelete({
        username : "p",
    })
    res.send("user deleted")
})

// in this route we fetch or get all the data from the form
app.post('/get-form-data', (req, res) => {
    console.log(req.body)
    res.send("data received")
})




app.listen(3000)