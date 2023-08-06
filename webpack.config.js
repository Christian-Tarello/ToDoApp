const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = 'development';

module.exports = {
    mode,
    entry: './src/index.js',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
    }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
    })
  ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: (pathData) => {
            const filepath = path
              .dirname(pathData.filename)
              .split("/")
              .slice(1)
              .join("/");
            return `${filepath}/[name].[hash][ext][query]`;
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    // fallback to style-loader in development
                    mode !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                    'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};