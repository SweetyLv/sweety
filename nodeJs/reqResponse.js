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
    res.write('<h1>hello</h1>');
    //服务器请求后，显示的内容
    res.end();
});
server.listen(8080,'localhost');
//console.log(server.address());
