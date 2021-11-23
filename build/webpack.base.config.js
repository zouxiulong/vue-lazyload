
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const CHUNK_FILE_HASH_TAG = '_[chunkhash:5]';
const SRC_PATH = path.join(__dirname, '../src')


const baseConfig = {
    // 打包入口
    entry: path.join(SRC_PATH, 'main.js'),

    output: {
        // 输出的文件名称
        path: path.join(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.vue', '.js', '.ts', '.sass', '.less', '.json'],
    },

    module: {
        rules:[
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: `images/[name].[ext]`,
                    esModule:false
                }
            }
        ]
    },

    plugins:[

        new VueLoaderPlugin(),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../index.html')
        })
    ]

}
module.exports = baseConfig
