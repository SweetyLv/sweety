var http = require('http');
var server = http.createServer();
server.on('error',function(err){
    console.log(err);
});
server.on('listening',function(){
    console.log('listening......');
});
server.on('request',function(){
    console.log('There are some clients to requires!');
});
server.listen(8080,'localhost');
//console.log(server.address());
