const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = Schema({
    email: {
        type: String,
        trim: true,
        validate: {
            validator: (v) => {
              return  validator.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    },
    password: String
})

const User = mongoose.model('User',userSchema)
module.exports = User