const merge = require('webpack-merge');
const base =require('./webpack.common');

module.exports = merge(base,{
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode:'development'
})