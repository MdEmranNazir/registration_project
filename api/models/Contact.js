const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

//schema
const ContactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 4
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator: (v) => {
              return  validator.isEmail(v)
            },
            message: `{VALUE} is not an email`
        }
    }

})

//model
const Contact = mongoose.model('Contact', ContactSchema)
module.exports = Contact
