#### 项目发布
* 在项目源代码页面链接前缀那加上http://htmlpreview.github.com/?
* 例如:需要打开的项目页面https://github.com/aisinvon/aisinvon.github.io/blob/master/index.html给加上前缀http://htmlpreview.github.com/?
* 最终链接http://htmlpreview.github.io/?https://github.com/aisinvon/aisinvon.github.io/blob/master/index.html
* from:https://www.zhihu.com/question/24156818/answer/35181447
* [hexo发布文章]（https://github.com/SweetyLv/sweety_node_php_knowlege/blob/master/hello-world.md）

#### 语言类型
* github是采用Linguist来自动识别仓库代码应该为哪一类。
* 在仓库根目录创建 .gitattributes文件，添加以下代码：
* .js linguist-language = php
* .css linguist-language = php
* .html linguist-language = php
这表示将 js, css, html 代码按照 php 语言统计

