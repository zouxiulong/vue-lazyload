const baseConfig = require("./webpack.base.config.js");

const webpack = require('webpack')
const { merge } = require('webpack-merge')

const devConf = {
    mode: 'development',
    output: {
        filename: 'js/[name].js'
    },
    module: {
        rules:[
            {
                test: /\.(css|less)$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(), // 热更新
    ],

    devServer: {
        hot: true,
        open: true,
        port: '8888',
    }
}


module.exports = merge(baseConfig, devConf)