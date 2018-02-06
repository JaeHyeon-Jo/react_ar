var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, 'src'),    // 소스 파일은 src 폴더에 
    build: path.join(__dirname, 'build') // 변환 후 파일은 build 폴더에 
};

module.exports = {
    entry: PATHS.src,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /(node_modules)/,
                loader : 'file-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    }
}