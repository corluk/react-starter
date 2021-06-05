const common = require("./webpack.config.js");
const path = require("path");
const { merge } = require("webpack-merge");
const RunNodeWebpackPlugin = require("run-node-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

common.plugins = [...common.plugins, new BrowserSyncPlugin({
    files: ["dist", "server", "src"],
    proxy: "localhost:38080",
    open: false
}), new RunNodeWebpackPlugin({
    scriptToRun: "./boot.js"
})];
/*
common.plugins = [...common.plugins, new RunNodeWebpackPlugin({
    scriptToRun: "./boot.js"
})];
*/
module.exports = merge(common, {

    mode: "development",
    devtool: "eval-source-map",
    watch: true,
    /*
    devServer: {
        proxy: {"/": "http://localhost:8080"},
        contentBase: path.join(__dirname, "dist")
    } */
});
