```
//1.初始化git
$ git init

//2. 创建git提交时需要忽略文件
$ touch .gitignore README.md

.gitignores配置内容

    node_modules
    zhufeng-react-tutorial-master
    *.log*
    .idea

//3. 初始化package.json
$ npm init

//4. 建立对应的src和build文件夹
$ mkdir src build


//5.  安装babel及相关插件
$ npm install --save-dev babel-cli

// 5.1 babel对es6，react的预解析
$ npm install --save-dev babel-preset-es2015 babel-preset-react

//5.2 配置babel
$ touch .babelrc
    
    {
      "presets": ["es2015", "react"],
      "plugins": []
    }

//6. 安装webpack及相关插件
$ npm install --save-dev webpack webpack-dev-server

//6.1 通过babel-loader进行js文件解析  
$ npm install babel-loader babel-core --save-dev

//6.2 解析样式
$ npm install --save-dev style-loader css-loader less-loader

//6.3 解析html模板----在webpack-dev-server不生效
npm install --save-dev html-webpack-plugin


//6.5 配置webpack


//7. 安装react及相关插件
$ npm install --save react react-dom react-router

```