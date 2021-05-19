const path = require("path");
const common = require("./webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
console.log(`commons: ${common}`);
const merged = {...common, ...{
    entry: "./App.jsx",
    output: {
        filename: "[name].js"
    },
    plugins: [...common.plugins, ...[
        new MiniCssExtractPlugin({filename: "[name].css"}),
        new CssMinimizerPlugin(),

    ]]
}};
merged.module.rules = merged.module.rules.map(rule => {
   if (rule.test.test(".css")){
      rule.use = [MiniCssExtractPlugin.loader, ...rule.use];
   }
   return rule;
});
module.exports = (env)=>{
  console.log(merged);
    if (env.production){
      merged.mode = "production";
      merged.watch = false;
      merged.output.path = path.resolve(__dirname, "dist", "assets");
    } else {
      merged.output.path = path.resolve(__dirname, "dev", "assets");
      merged.devtool = "eval-source-map";
      merged.mode = "development";
      merged.watch = true;
      merged.plugins = [...merged.plugins ];
    }
    return merged;
  };
