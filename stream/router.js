const { Router } = require("express");
const Chatroom = require("./model");
const Sse = require("json-sse");
const router = new Router();
const stream = new Sse();
router.get("/stream", async (request, response) => {
  console.log("got a request on /stream");

  // stream now handles this connection
  // response.status(200);
  // response.send("it works");

  const messages = await Chatroom.findAll()
  const data = JSON.stringify(messages)
  console.log('stringified messages:', messages)
  stream.updateInit(data) // puts data in the stream
  stream.init(request,response) //this is important
});
router.post("/message", async (request, response) => {
  console.log("got a request on /message", request.body);
  const { message } = request.body;
  const entity = await Chatroom.create({
    message: message
    // message
  });

  const messages = await Chatroom.findAll() //copied from line 13
  const data = JSON.stringify(messages) //copied from line 14
  // console.log('stringified messages:', messages)
  stream.send(data) // updates stream

  response.status(201);
  response.send("Thanks for your message.");
});
module.exports = router;
