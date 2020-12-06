const server = require('http').createServer();
const io = require('socket.io')(server, {
    // handling CORS
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
const PORT = 3001;
const NEW_MESSAGE_EVENT = "newMessageEvent"

io.on('connection', (socket) => {
    // console.log(socket);
    let roomName = socket.handshake.query.roomName;

    socket.join(roomName);

    socket.on(NEW_MESSAGE_EVENT, (message) => {
      io.to(roomName).emit(NEW_MESSAGE_EVENT, message)
    })

    socket.on('disconnect', () => {
      socket.leave(roomName);
    })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});