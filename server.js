const io = require('socket.io')();
const PORT = 3000;
const MESSAGE_EVENT = "newMessageEvent"

io.on('connection', (client) => {
    client.on(MESSAGE_EVENT, (messages) => {
        client.emit(MESSAGE_EVENT, messages)
    })
});

io.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});