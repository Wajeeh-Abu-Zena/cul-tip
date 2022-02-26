const mongoose = require("mongoose")

const UsersSchema = mongoose.Schema({
   UserFirstName: {
    type: String,
    required: [true, "Add your first name"]
   },
   UserLastName: {
    type: String,
    required: [true, "Add your last name"]
   },
   UserEmail: {
    type: String,
    required: [true, "Add your email"]
   },
   UserPhone: {
    type: String,
    required: [true, "Add your phone number"]
   },
   UserPassword: {
    type: String,
    required: true
   },

})

module.exports = mongoose.model('Users', UsersSchema)
