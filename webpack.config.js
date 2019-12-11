const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "src/index.html"),
  filename: "index.html"
});

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
    ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
   contentBase: path.join(__dirname, "dist"),
   port: 9000,
   open: true
 }
};
