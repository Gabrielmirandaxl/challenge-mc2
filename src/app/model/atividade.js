const sequelize = require('sequelize')
const connection = require('../../database/connection')

const Atividades = connection.define('atividades', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: sequelize.STRING,
    allowNull: false,
  },
  datainicio: {
    type: sequelize.DATE,
    allowNull: false,
  },
  datafinal:{
    type: sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: sequelize.ENUM(),
    values: ['pendente','concluida','cancelada'],
    allowNull: false,
  }
})

module.exports = Atividades