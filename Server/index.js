const express=require('express')
require('dotenv').config()
const UserModel = require('./Routes/UserModel');
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');

const cors = require('cors')

const app=express()
app.use(cors())



const PORT=process.env.PORT
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DB connected');
})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store:MongoStore.create({mongoUrl:process.env.MONGO_URL, collectionName:'session'}),
    cookie: { maxAge:1000*60*60*24 }
  }))

  app.use(UserModel)
  
  
app.listen(PORT,()=>{
    console.log("Port running on",PORT)
})

