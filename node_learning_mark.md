## demo page
* [demo_teaching canvas](https://segmentfault.com/a/1190000008278925)
* [demo_code](https://demo.luckyw.cn/)

## cmd & npm  
* 注释：$为指令符号，输入指令时不需要写$此符号
* cd ..  返回上一层目录
* cd \ 返回根目录
* npm -v  看npm版本
* node -v 看node版本
* npm install npm -g 通过npm命令升级为npm的新版本for Windows
* npm install <Module Name>  通过npm安装Node.js模块语法。
  例如  Node.js web框架模块 express。则表达为：  npm install express  
  安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
  例如：var express = require('express');
* npm list -g  查看所有全局安装的模块
* npm iist grunt  查看某个模块的版本号
* npm uninstall express   卸载 Node.js 模块
* npm ls  你可以到 /node_modules/ 目录下查看包是否还存在，或者使用该命令查看
* npm update express   更新模块
* npm search express   搜索模块
* 创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。
  npm init
* 在 npm 资源库中注册用户（使用邮箱注册）
  npm adduser
  Username: mcmohd
  Password:
  Email: (this IS public) mcmohd@gmail.com
* npm publish  发布模块
* NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
* 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
* 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
* 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
* 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
* 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
* 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
  
  ## Node.js REPL(交互式解释器)
* Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
* Node 自带了交互式解释器，可以执行以下任务：
* 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
* 执行 - 执行输入的数据结构
* 打印 - 输出结果
* 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出
* 启动node的终端指令  $ node
