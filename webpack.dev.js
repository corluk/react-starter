const {merge} = require("webpack-merge")
const path = require("path")
const common = require("./webpack.config.js") 

module.exports = merge(common,{
    mode : "production",
    watch : false,
    optimization : {
        minimize : false 
    },
    devtool: 'eval-source-map',
     
})  