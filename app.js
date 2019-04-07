/* socket\app.js */
const app = require(`express`)();
const http = require(`http`).createServer(app);
const io = require(`socket.io`)(http);
    const chat = io.of('/chat');
    chat.on(`connection`, (socket) => {
        console.log(`a user connected`);


        socket.on(`chat message`, (msg) => {
            chat.emit(`chat message`, msg);
            // console.log(msg)
        });
        // socket.off(`chat message` , { message : message} = function () {
        //     console.log('\'socket listener off\'')
        // });

        // socket.off(`chat message` , data);


        socket.on(`disconnect`, () => {
            console.log(`user disconnected`);
        });
    });

app.get(`/chat`, (req, res) => {
res.sendFile(__dirname + `/index.html`);
});

http.listen(8080, () => {
    console.log(`Connected at 8080`);
});