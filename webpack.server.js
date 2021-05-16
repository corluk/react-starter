const path = require("path");
const common = require("./webpack.config.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const RunNode = require("run-node-webpack-plugin");
 
const merged = {...common, ...{
  target: "node",
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
 },
      plugins: [...common.plugins,
                        ...[
                            new CopyWebpackPlugin({ patterns: [{"from": "views", "to": "views"}]}),
                            new IgnoreEmitPlugin( /\.css$/),
                            
                          ]]
     },
  };

module.exports = (env)=>{
  console.log(env);
  if (env.production){
    merged.mode = "production";
    merged.watch = false;
    merged.entry = "./server.boot.js";
    merged.output = {
      path: path.resolve(__dirname, "dist"),
      filename: "bootstrap.js",
      libraryTarget: "commonjs2"
    };
  } else {
    merged.entry = "./server.js";
    merged.mode = "development";
    merged.watch = true;
    merged.devtool = "eval-source-map";
    merged.plugins = [...merged.plugins, new RunNode({scriptToRun: "browser-sync.js"}) ];
    merged.output = {
      path: path.resolve(__dirname, "dev"),
      filename: "server.js",
      libraryTarget: "commonjs2"
    };
  }


  console.log(merged);
  return merged;
};
