const express = require('express')
const cors = require('cors')

const routes = require('./routes')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(cors())
  }

  routes () {
    this.express.use('/api', routes)
  }
}

module.exports = App