var socket = io();
socket.on('connect', function(){
    console.log('Connected to server');
    socket.emit('createMessage', {
       from: 'shamim@gmail.com',
       text:'hey this is shamim' 
    })
})

socket.on('disconnect', function(){
    console.log('disconnected from server'); 
})
socket.on('newMessage', function(message){
    console.log('NewMessage', message); 
})