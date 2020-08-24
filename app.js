const http = require('http')
const greeting = require('./greeting')
const nodePath = process.argv[0]
const appPath = process.argv[1]
const firstArg = process.argv[2]

console.log('nodePath: ',nodePath)
console.log('appPath: ',appPath)
console.log('first Arg: ', firstArg)
//npm install -g nodemon    aurorestart

global.sayZhopa = () =>{console.log('Zhopa')} // GLOBAL

http.createServer((req,res)=>{
    res.end('NODE JS')

}).listen(3000,'127.0.0.1', ()=>{

    greeting.log()
    sayZhopa()
    console.log('listening 3000 port')
})