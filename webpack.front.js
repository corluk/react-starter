const path = require("path");
const common = require("./webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
 
const merged = {...common, ...{
    entry: "./App.jsx",
    output: {
        filename: "[name].bundle.js"
    },
    plugins: [...common.plugins, ...[
        new MiniCssExtractPlugin({filename: "style.css"}),
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
    console.log(env);
    if (env.production){
      merged.mode = "production";
      merged.watch = false;
      merged.output.path = path.resolve(__dirname, "dist", "assets");
    } else {
      merged.mode = "development";
      merged.watch = true;
      merged.devtool = "eval-source-map";
      merged.optimization.minimize = false;
      merged.output.path = path.resolve(__dirname, "dev", "assets");

    }
    return merged;
  };
