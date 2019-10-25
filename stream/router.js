const {Router}=require('express')
const Chatroom = require('./model')
const router = new Router()
router.get('/stream', (request, response) => {
  console.log('got a request on /stream')
  response.status(200)
  response.send('it works')
})
router.post('/message', async (request,response) => {
  console.log('got a request on /message' ,request.body)
  const {message} = request.body
  const entity = await Chatroom.create({
    message: message
    // message
  })
  response.status(201)
  response.send('Thanks for your message.')
})
module.exports=router