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
    let roomName = socket.handshake.roomName;

    socket.join(roomName);

    socket.on(NEW_MESSAGE_EVENT, (message) => {
      io.to(roomName).emit(NEW_MESSAGE_EVENT, message)
    })
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});