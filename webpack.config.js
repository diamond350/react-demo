//6.3 引入模块
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //入口
    entry:'./src/index.js',
    //出口
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    plugins: [  //6.3 配置在dev下生成src/index.html模板
        new HtmlWebpackPlugin({
            title: 'My App',
            /*filename: './src/index.html'*/  //创建文件
            template: './src/index.html'  //模板
        })
    ],
    //设置在浏览器下源码可视
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            //6.1 对es6语法预解析
            {
                test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'],
            },
            //6.2 样式解析
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" //在 ".css" files中使用"style" and "css" loader
            },
            {
                test: /\.less/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    resolve: {
        //省略后缀
        extensions: ["", ".js", ".jsx", ".css", ".json"],   //  "" 空字符串表示带后缀的可以被解析到  .js,.jsx表示在引入后缀为js,jsx的库的时候可以不用添加后缀
    },
    devServer: {
        //出口文件的位置
        publicPath: "/",
        stats: {colors: true},
        port: 8080,
        //浏览器输出内容的位置
        contentBase: 'build',
        inline: true,
        //http://localhost:8080/api/2  ====>http://localhost:8080/2.json
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
                // pathRewrite: {'^/api2' : ''}

                pathRewrite:{'/api/(.*)':'$1\.json'}
            }
        }

    }

}