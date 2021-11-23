const baseConfig = require("./webpack.base.config.js");

const { merge } = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CHUNK_FILE_HASH_TAG = '_[chunkhash:5]';

const prodConfig = {
    mode: 'production',
    output: {
        filename: `js/[name]${CHUNK_FILE_HASH_TAG}.js`,
        chunkFilename: `js/[name]${CHUNK_FILE_HASH_TAG}.js`
    },
    module: {
        rules:[
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            // 这里可以指定一个 publicPath
                            // 输出解析文件的目录，url 相对于 HTML 页面
                            // 默认使用 webpackOptions.output中的publicPath
                            publicPath : "../",
                        }
                    },
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    priority: 10,
                    name: "vendor",
                    minSize: 0
                },
            }
        },
        runtimeChunk: {
            name: "runtimeChunk",
        }
    },

    plugins:[
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename : `./css/[name]${CHUNK_FILE_HASH_TAG}.css`,
        }),
    ]

}

module.exports = merge(baseConfig, prodConfig)