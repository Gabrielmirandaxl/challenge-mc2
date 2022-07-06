const connection = require("./connection")
require("../app/model/atividade")

async function createTable() {
  await connection.sync({ force: true })
}

createTable()