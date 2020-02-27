const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:{
        app:'./src/main.js',
        vendor:['lodash']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'webpack缓存'
        }),
        new ManifestPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2
                },
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                },
                manifest:{
                    name:'manifest',
                    chunks:'initial',
                    minChunks:2
                }
            }
        }
    },
    output:{
        filename:'[name].[hash].js',
        chunkFilename:'[name].[hash].js',
        path:path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
}