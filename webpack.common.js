const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: "./js/entry.js",
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            //{
            //    test:/\.css$/,
            //    use:['style-loader', 'css-loader']
            //},
            {
                test:/\.mp4$/,
                loader:'file-loader',
                options:{
                    name: '[name].[ext]',
                    outputPath:'video/'
                }
            },
            {
                test:/\.(jpg|jpeg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name:'[name].[ext]',
                    outputPath:'image/'
                }
            },
            {
                test:/\.ico$/,
                loader:'file-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            favicon: './favicon.ico'
        })
       
    ]
}