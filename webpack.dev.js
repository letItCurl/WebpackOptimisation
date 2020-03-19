const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')


module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    devServer:{
        contentBase:'./dist',
        port:5566,
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin,
    ]
})