### 欢迎访问我的博客
* [欢迎访问我的博客](https://sweetylv.github.io/index.html)
* [hexo换主题](http://blog.csdn.net/qq_27093465/article/details/72957030)
* [手把手教全程安装博客](http://blog.csdn.net/gdutxiaoxu/article/details/53576018)

## online editor
* [jsFiddle](https://jsfiddle.net/)
* [codepen](https://codepen.io/)
* [how to use jsFiddle](http://doc.jsfiddle.net/)

## framework
* [element](http://element-cn.eleme.io/#/zh-CN)
* [element github](https://github.com/ElemeFE/element)
* [Mint UI](http://mint-ui.github.io/#!/zh-cn)
* [Mint UI github](https://github.com/ElemeFE/mint-ui)
* [element UI github](https://github.com/elemefe)

## hexo上传git问题
* >你的配置文件写的有问题，type和repo后面都要有一个空格
* >hexo deploy出现：not found git的解决方法：
1）git 环境变量添加：(http://blog.csdn.net/Qin605/article/details/71124757)
D:\program files\Git\bin; 
D:\program files\Git\mingw64\libexec\git-core; 
2)_config.yml配置中的deploy下的“type”字段中的“github”改为“git”(https://www.jianshu.com/p/5e0ca2b14815)
再执行：
npm install hexo-deployer-git --save
重新deploy即可
hexo deploy
3)把文件夹名称换位仓库名称（http://blog.csdn.net/mayuko2012/article/details/60606326）
参照网上的方式：
deploy的type 的github需要改成git
npm install hexo-deployer-git –save
仍然无解。
最后修改blog的初始文件夹为github上的仓库名称，解决问题。
* >[hexo init命令出现问题](http://blog.csdn.net/whjkm/article/details/42675579)

## linux相关命令等
* >[开机启动项查看和修改]（https://jingyan.baidu.com/article/bea41d43b8a2f4b4c51be6a5.html）
* >:wq  保存并退出  ;     i  进入编辑    ；   esc键退出编辑

## npm命令
* >[hexo全局下载安装失败的解决方式如下](https://www.zhihu.com/question/27616505)
* > npm源的问题，可以尝试更换taobao的npm源
* >npm install -g cnpm --registry=https://registry.npm.taobao.org
* >cnpm install hexo-cli -g

## 个人博客纪录篇
安装成功参考篇：
1、安装导航篇：
http://blog.csdn.net/gdutxiaoxu/article/details/53573286

2、环境变量配置
http://blog.csdn.net/banqgg/article/details/52983827
我的电脑->属性->高级系统配置->高级->环境变量

3、github上选择主题显示
https://sweetylv.github.io/
参考路径：http://blog.csdn.net/gdutxiaoxu/article/details/53576018 

## 
* CNAME
* sweetylv.com

