const mongoose = require("mongoose");
const User = require("../Models/UserScheme")

const host = "127.0.0.1"
const port = "27017"
const dbName = "EventsList"
const connectionString = `mongodb://${host}:${port}/${dbName}`
const url = "mongodb+srv://cul-tip:12345@cluster0.7sa2o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(connectionString)
   .then(() => {
    console.log("Connected!")
}).catch((err) => {
    console.log("Failed to connect")
})

const createUser = async (user) => {
    const createdUser = new User(
        {
            UserFirstName: user.UserFirstName,
            UserLastName: user.UserLastName,
            UserPhone: user.UserPhone,
            UserEmail: user.UserEmail,
            UserPassword: user.UserPassword
        }
    )
    const result = await createdUser.save()
    return result
}

exports.createUser = createUser;