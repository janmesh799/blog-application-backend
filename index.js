require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ConnectToMongo = require('./Database/Db')

const app = express()
app.use(express.json())
app.use(session({ 
    secret: process.env.SESSION_SECRET || "random word",
    saveUninitialized:false,
    cookie:{maxAge:86400000}, //oneDay
    resave:true,
 }))

ConnectToMongo()

app.get('/', (req, res) => {
    res.send("home")
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/blog', require('./routes/blog'))

app.listen(5000, () => {
    console.log("backend app is running on http://localhost:5000")
})

