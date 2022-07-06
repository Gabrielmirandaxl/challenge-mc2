const { Sequelize } = require('sequelize')
const config = require('../config/config')

const connection = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  dialect: config.mysql.dialect,
  host: config.mysql.host,
  port: config.mysql.port
})

connection.authenticate().then( () =>{
  console.log("conectado")
})
.catch( (error) =>{
  console.error(`erro ${error}`)
})

module.exports = connection