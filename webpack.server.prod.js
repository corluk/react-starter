
const {merge} = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");



module.exports = merge(common, {
    mode: "production",
    target: "node",
    context: path.resolve(__dirname, "src", "server"),
    entry: "./bootstrap.js",
    externals: [nodeExternals()],
    optimization: {
      minimize: true
   },
   watch: false,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bootstrap.js",
        libraryTarget: "commonjs2"
      },
      plugins: [
        new CopyWebpackPlugin({ patterns: [{"from": "views", "to": "views"}]})
      ]

});
