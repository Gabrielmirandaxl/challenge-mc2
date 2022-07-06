const AtividadeModel = require('../model/atividade')

class UserController {
  async create(req, res) {
    try {
      const atividade = req.body
      const result = await AtividadeModel.create(atividade)

      res.status(201).json(result)
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }

  async read(req, res) {
    try {
      const result =  await AtividadeModel.findAll()

      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }

  async readId(req, res) {
    try {
      const { id } = req.params
      const result = await AtividadeModel.findByPk(id)

      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const payload = req.body

      await AtividadeModel.update(payload, {
        where: {
          id: id
        }
      })

      const result = await AtividadeModel.findByPk(id)

      res.status(200).json(result)
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }


  async delete(req, res) {
    try {
      const { id } = req.params
      const result = await AtividadeModel.destroy({
        where: {
          id: id
        }
      })

      res.status(204).json(result)
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      }) 
    }
  }
}

module.exports = UserController