var fs = require('fs');
var filedir  = './first/source';
fs.watch(filedir,function(ev,file){
    fs.readdir(filedir,function(err,dataList){
        var arr=[];
        dataList.forEach(function(f){
            var info = f.statSync(filedir + '/'+ f);
            console.log(info);
        });
    });
});
