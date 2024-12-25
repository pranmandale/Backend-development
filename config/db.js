const mongoose = require('mongoose')
require('dotenv').config();    
    

const URI = process.env.MONGODB_URI;


// const connection = mongoose.connect('mongodb://0.0.0.0/practice').then(() => {
//     console.log("connection established")
// })

const connection = mongoose.connect(URI).then(() => {
    console.log("connected to mongodb")
})
module.exports = connection