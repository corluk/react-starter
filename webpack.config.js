const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./App.jsx",
    module: {
        rules: [ {test: /\.jsx?/,
            use: "babel-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.s[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    optimization: {
        minimize: false
    },
     resolve: {
         extensions: [".js", ".jsx" ]
     },
     plugins: [
         new ESLintPlugin()
     ]


};
