const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: "index.html"
});

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "/webpack/dist")
  },
  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
       use: {
         loader: "babel-loader",
         options: {
           presets: ["@babel/preset-react", "@babel/preset-env"]
         },
         plugins: ["@babel/plugin-proposal-class-properties", "babel-plugin-remove-graphql-queries"]
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
   contentBase: path.join(__dirname, "dist"),
   port: 9000,
   open: true
 }
};
// module.exports = ({ config }) => {
//   // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
//   config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
//
//   // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
//   config.module.rules[0].use[0].loader = require.resolve("babel-loader")
//
//   // use @babel/preset-react for JSX and env (instead of staged presets)
//   config.module.rules[0].use[0].options.presets = [
//     require.resolve("@babel/preset-react"),
//     require.resolve("@babel/preset-env"),
//   ]
//
//   config.module.rules[0].use[0].options.plugins = [
//     // use @babel/plugin-proposal-class-properties for class arrow functions
//     require.resolve("@babel/plugin-proposal-class-properties"),
//     // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
//     require.resolve("babel-plugin-remove-graphql-queries"),
//   ]
// }
