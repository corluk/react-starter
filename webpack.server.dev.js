const {merge} = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const RunNode = require("run-node-webpack-plugin");



module.exports = merge(common, {
    mode: "development",
    target: "node",
    context: path.resolve(__dirname, "src", "server"),
    entry: "./index.js",
    externals: [nodeExternals()],
    optimization: {
      minimize: false,
   },
    output: {
        path: path.resolve(__dirname, "./dev"),
        filename: "server.js",
        libraryTarget: "commonjs2"
      },
      plugins: [
      //  new CleanWebpackPlugin(),
        new CopyWebpackPlugin({ patterns: [{"from": "views", "to": "views"}]}),
        new RunNode({scriptToRun: "browser-sync.js"})
      ],
      watch: true

});
