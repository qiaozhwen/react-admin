const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpeedMesurePlugin = require("speed-measure-webpack-plugin");
const webpack = require("webpack");
console.log(__dirname, "-------------");
module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: __dirname + "/build",
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
        use: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    port: 8888,
    // progress: true,
    proxy: {
      "/api": "http://localhost:8889/",
    },
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
};
