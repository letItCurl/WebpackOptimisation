const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsplugin = require('uglifyjs-webpack-plugin')


module.exports = merge(common,{
    mode: 'production',
    devtool: 'source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    optimization:{
        minimizer:[
            // uglifyJs here
            new UglifyJsplugin(),
            new OptimizeCssAssetsPlugin()
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/mycss.mycss.[name].css"
        })
    ]
})