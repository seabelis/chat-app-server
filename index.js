const express = require('express')
const bodyParser = require('body-parser')
const streamRouter=require('./stream/router')
const userRouter=require('./chatUser/router')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000

const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(cors()) //cors function is executed
app.listen(port, () => console.log('server running on port', port))

app.get('/', (request, response) => {
  console.log('get a request on /')
  response.status(200)
  response.send('hello world!')
})
app.use(streamRouter)
app.use(userRouter)