const router = require('express').Router()
const AtividadeController = require('../app/controller/AtividadeController')

const controller = new AtividadeController()

router
  .post('/atividades', controller.create)
  .get('/atividades', controller.read)
  .get('/atividades/:id', controller.readId)
  .put('/atividades/:id', controller.update)
  .delete('/atividades/:id', controller.delete)

module.exports = router