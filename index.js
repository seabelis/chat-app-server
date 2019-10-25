const express = require('express')

const app = express()

const port = process.env.PORT || 5000

app.listen(port, () => console.log('server running on port', port))

app.get('/', (request, response) => {
  console.log('get a request on /')
  response.status(200)
  response.send('hello world!')
})