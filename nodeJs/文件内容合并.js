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
        //console.log(arr);
        //读取数组中的文件内容，并合并
        var content='';
        arr.forEach(function(f){
            var c = fs.readFileSync(f);
            //console.log(c);
            content += c.toString() +'\n';

        });
        console.log('content');
        fs.writeFile('./first/js/index.js',content);  //新建文件并把合并后的内容存放在此
    });
});
