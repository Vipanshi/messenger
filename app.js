var express=require('express');
var socket=require('socket.io');

var app=express();

var port=3000;
app.listen(port,function(){
    console.log("server"+port);
    
});

app.get("/",function(req,res){
    res.sendfile("index.html");
});

io.sockets.on('connection',function(socket){
    socket.on('send message',function(data){
        io.sockets.emit('new message',data);
        
    });

});



