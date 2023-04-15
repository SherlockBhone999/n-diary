
const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
require('dotenv').config()

const router = require('./api/router')

////////


mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('connected to mongodb'))

app.use(cors())
app.use(express.json({limit : '50mb'}))
app.use(router)



////////////

app.listen( 3000, ()=>{
  console.log('server on 3000')
})

