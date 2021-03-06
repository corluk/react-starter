const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./sys/App.jsx",
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
            test: /\.(css|less)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        { test: /\.scss$/, use: ["sass-loader", "css-loader"]}

       ],

    },
    optimization: {
        minimize: true,
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
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
         new HtmlWebpackPlugin({
           title: "HTML WEBPACK DEVSERVER",
            template: "./assets/index.ejs",
            meta: { viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
            description: "{{description}}",
          },
          favicon: "./assets/favicon.svg",
           filename: path.resolve(__dirname, "server/views/index.hbs"),
         inject: false,
         }),
     ]


};

