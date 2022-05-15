const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "http://example.com",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log("user connected")
    socket.on("teste", function(data){
        io.emit("escuta", data)
    })
})

server.listen(8000)