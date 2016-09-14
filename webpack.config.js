var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
//项目根目录
var ROOT_PATH = path.resolve(__dirname);
//应用目录文件夹
var APP_PATH = path.resolve(ROOT_PATH, 'app');
//打包生成目录文件夹
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    //项目的文件夹 默认会找index.js
    entry: {
        app: path.resolve(APP_PATH, 'app.jsx')
    },
    //输出的文件夹 合并以后的js会命名为bundle.js
    output:{
        path:BUILD_PATH,
        filename: 'app.js'
    },
    //添加一个插件，会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve('./', 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry中的哪几个脚本文件
            chunks:['app'],
            //要把script标签插入到哪里
            inject:'body'
        })
    ],
    devServer: {
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                //先使用css loader 把所有的css 遍历一遍执行其中的url
                //然后使用style-loader 把你的样式插入到你的页面上
                loaders: ['style', 'css'],
                include:APP_PATH
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include:APP_PATH,
                query: {
                    presets:['es2015']
                },
                exclude: /node_modules/
            }
        ]
    }
};