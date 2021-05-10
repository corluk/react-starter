const {merge} = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.js");

module.exports = merge(common, {
    mode: "development",
    watch: true,
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, "dev-dist"),

        filename: "bundle.js"
    },
    devServer: {

        publicPath: "/public/assets/js/",
        contentBase: path.resolve(__dirname, "public")
    },
    devtool: "eval-source-map",


});
