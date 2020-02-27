const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const base = require('./webpack.common');
const webpack = require('webpack')
module.exports = merge(base,{
    devtool:'source-map',
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    mode:'production'
})