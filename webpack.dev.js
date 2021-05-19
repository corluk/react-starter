const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
common.plugins = [...common.plugins, new BrowserSyncPlugin({
    files: ["dist", "server", "src"],
    proxy: "localhost:8080",
    open: false
})];
module.exports = merge(common, {

    mode: "development",
    devtool: "eval-source-map",
    watch: true,

});
