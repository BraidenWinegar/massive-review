require('dotenv').config()
const{SERVER_PORT, CONNECTION_STRING} = process.env

const express = require('express')
const app = express()
app.use(express.json())

const massive = require('massive')
massive(CONNECTION_STRING)
    .then(db => { 
        app.set('db', db)  
        console.log('db connected')
     })



app.listen(SERVER_PORT, console.log(`server on ${SERVER_PORT}`))