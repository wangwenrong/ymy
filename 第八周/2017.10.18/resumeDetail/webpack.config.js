const path=require('path');
const webpack=require('webpack');
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
const HtmlWebPackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/main.js',
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    publicPath:'./dist',
                    use:'css-loader'
                })
            },
            {//字体图标
                test:/\.(eot|svg|ttf|woff)(\?.*)?$/,
                loader:'url-loader?limit=50000'
            },
            {//图片
                test:/\.(png|jpg|jpeg|gif)$/,
                loader:'file-loader?limit=952800'
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css'),
        new HtmlWebPackPlugin({
            template:'./src/index.html'
        })
    ]
};