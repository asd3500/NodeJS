const express = require('express')
const app = express()

const fs = require('fs')
const filecontent = fs.readFileSync('readme.txt','utf-8')

const Emitter = require('events')
const emitter = new Emitter()

const eventName = 'greet'

emitter.on(eventName,()=>{
    console.log('emitter.on first')
})

emitter.on(eventName,(data)=>{
    console.log('emitter.on second')
    console.log(data)
})

emitter.emit(eventName, `emit ${eventName}`)

app.get('/',(req,res)=>{
    res.end(filecontent)
})

app.listen(3000)