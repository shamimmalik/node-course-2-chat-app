const path =require('path');
const http =require('http')
const express =require('express');
const socketIO =require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port =process.env.PORT || 3000;
var app =express();

var server=http.createServer(app)
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connection');
    socket.emit('newMessage',  {
       from: 'sam@gamail.com',
       text: 'hey. what is going on' ,
       createAt:123 
    })
    socket.on('createMessage', (message) => {
        console.log('CreateMassage', message);  
    })
    socket.on('disconnect', () => {
        console.log('User was disconnected');  
    })
  
})

server.listen(port, () =>{
console.log(`server is up on port ${port}`);
});