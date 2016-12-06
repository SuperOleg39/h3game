'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    
    context: path.resolve(__dirname, 'src'),
    
    entry: {
        main: './main'
    },
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    resolve: {
       extensions: ['', '.ts', '.js']
    },
    
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin()
    ]
};

module.exports = config;
