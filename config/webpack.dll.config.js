var path = require("path");
var webpack = require("webpack");

module.exports = {
  // 要打包的模块的数
  entry: {
    vendor: ['echarts']
  },
  output: {
    path: path.join(__dirname, '../dist/static/js'), // 打包后文件输出的位置
    filename: '[name].dll.js',// vendor.dll.js中暴露出的全局变量名。
    library: '[name]_library' // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
  ]
};
