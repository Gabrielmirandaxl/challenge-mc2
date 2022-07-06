
const App = require('./app')

async function server (){

  const app = new App().express
  const port = process.env.port || 8080

  app.listen(port, () => {console.log(`Server listening on port ${port}`)
  })

}

server()