var http = require('http');
var server = http.createServer();
server.on('error',function(err){
    console.log(err);
});
server.on('listening',function(){
    console.log('listening......');
});
server.on('request',function(req,res){
    //console.log('req');
    res.write('hello');
    res.end();
});
server.listen(8080,'localhost');
//console.log(server.address());
