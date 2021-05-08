const {merge} = require("webpack-merge")
const path = require("path")
const common = require("./webpack.config.js") 

module.exports = merge(common,{
    mode : "production",
    watch : false,
    optimization : {
        minimize : true 
    },
   
    output :{
        path:path.resolve(__dirname,"dist"),

        filename : "bundle.js"
    }, 
})  