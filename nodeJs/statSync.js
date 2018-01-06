var fs = require('fs');
var filedir  = './first/source';
fs.watch(filedir,function(ev,file){
    fs.readdir(filedir,function(err,dataList){
        var arr=[];
        dataList.forEach(function(f){

                var info = fs.statSync(filedir + '/'+ f);

                //console.log(info);
                if(info.mode==33206){  //mode:33206,文件
                    arr.push(filedir + '/'+ f);
                }
        });
        console.log(arr);
    });
});
