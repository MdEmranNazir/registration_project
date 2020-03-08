const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

//Connect to Db
mongoose.connect(
process.env.DB_CONNECT,
{ useUnifiedTopology: true },
 () => console.log('connected to Db'))


const conRouter = require('./api/routes/contact')
const userRoute = require('./api/routes/user')

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 32843

//conRouter
app.use('/api/con',conRouter)
app.use('/api/users',userRoute)


app.get('/',(req,res) => {
    res.send('you are right')
    
})

 //api port
app.listen(PORT,() => {
    console.log('server running on port no 32843')
    
})

