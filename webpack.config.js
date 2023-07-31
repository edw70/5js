// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // clear: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
        liveReload: true,
        port: 3000,
        static:{
            directory: path.join(__dirname, "dist"),
        },
        hot:false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
		 meta:{
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                
            },
        }),
       /* new HtmlWebpackPlugin({
            template: './src/thankYou.html',
            filename: 'thankyou.html',
        }),*/
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
      /*  new CopyPlugin({
            patterns: [
                {from: "./src/ressources", to: "ressources"},
            ],
        }),*/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
          /*  {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },*/
            {
                test: /\.s[ac]ss$/i, 
                use: [
                  // Creates `style` nodes from JS strings
                  stylesHandler,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};