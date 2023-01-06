const express = require('express')
const app =  express()
const port = 3000
const server = app.listen(port)
const io = require('socket.io')(server)

app.use(express.static(__dirname))

app.get('/', (req, res) =>{
    res.send("hello world")
})


io.on('connection', (socket) => {
    console.log('a user connected');
  });

