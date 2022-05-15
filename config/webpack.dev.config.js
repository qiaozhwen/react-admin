const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpeedMesurePlugin = require("speed-measure-webpack-plugin");
const myLoader = require('../loaders/qzLoader')
const webpack = require("webpack");
console.log(__dirname, "-------------");
const name = 'react-admin'
module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    // path: __dirname + "/build",
    library: `${name}`, // 微应用的包名，这里与主应用中注册的微应用名称一致
    libraryTarget: "umd", // 这里设置为umd意思是在 AMD 或 CommonJS 的 require 之后可访问。
    // jsonpFunction: `webpackJsonp_${name}` ,
    filename: "bundle.js",
  },
  module: {
    //loaders加载器
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: "url-loader",
        options: {
          esModule: false, // 这里设置为false
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: myLoader,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8888,
    disableHostCheck: true,
    // progress: true,
    proxy: {
      "/api": "http://localhost:8889/",
    },
    headers: {
      'Access-Control-Allow-Origin': '*' //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
    }
    // publicPath: "/dist/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "QZ REACT",
      template: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": require(`../env/${process.env.NODE_ENV}`),
    }),
    new SpeedMesurePlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".tsx", "ts"], //后缀名自动补全
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, '../loaders')]
  }
};
