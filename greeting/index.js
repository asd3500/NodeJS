const name = require('./name')
const date = require('./date')

class User{
    constructor(name,date) {
        this.name = name
        this.date = date
    }
    log = function() {
        console.log(`name: ${this.name}`)
        console.log(`date: ${this.date}`)
    }
}

module.exports = new User(name,date)