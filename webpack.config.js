const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: "index.html"
});

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "webpack")
  },
  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
       use: {
         loader: "babel-loader",
         options: {
           presets: ["@babel/preset-react", "@babel/preset-env" ],
           plugins: ["@babel/plugin-proposal-class-properties"]
         },
       },
       exclude: [/node_modules\/(?!(gatsby)\/)/],
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },

   ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
   contentBase: path.join(__dirname, "webpack"),
   port: 9000,
   open: true
 }
};
