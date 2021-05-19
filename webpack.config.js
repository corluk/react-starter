const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./App.jsx",
    output: {
        filename: "[name].js"
    },
    mode: "production",
    module: {
        rules: [ {test: /\.jsx?/,
            use: ["babel-loader"]
        },
        {
            test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
            use: ["url-loader?limit=100000"]
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
       ],

    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
         /*   reduxVendor: {
                test: /[\\/]node_modules[\\/](redux)/,
                name: "redux"
            },
            reactRouterVendor: {
                test: /[\\/]node_modules[\\/](react-router)/,
                name: "react-router"
              },
            reactDOMVendor: {
                test: /[\\/]node_modules[\\/](react-dom)/,
                name: "react-dom"
              },
            reactVendor: {
              test: /[\\/]node_modules[\\/](react)/,
              name: "react"
            },
            materialVendor: {
                test: /[\\/]node_modules[\\/](@material|jss)/,
                name: "material"
              },
              babelVendor: {
                test: /[\\/]node_modules[\\/](@babel)/,
                name: "babel"
              },*/
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
              },
            },
        }
    },

     resolve: {
         extensions: [".js", ".jsx" ]
     },
     plugins: [
         new ESLintPlugin({
             fix: true
         }),
         new LoadablePlugin(),
         new MiniCssExtractPlugin({filename: "[name].css"}),
         new CssMinimizerPlugin(),
     ]


};

