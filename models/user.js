// this file is only usseful for basic crud operations 
// such as read, write and update of data
// but it is not connected with database to connect we make other file/ folder

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,


})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel