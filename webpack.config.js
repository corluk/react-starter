const path = require("path")
 
 
module.exports = {
    context : path.resolve(__dirname,"src","front") ,
    entry : "./Main.jsx" ,
    mode : "development",
    module : {
        rules: [  {test:/\.jsx?/,
            use : "babel-loader"
        }, {
            test : /\.css$/,
            use : ["style-loader","css-loader"]
        }]
    },
    output :{
        path:path.resolve(__dirname,"dist"),
 
        filename : "bundle.js"
    },
    devServer :{

        publicPath : "/public/assets/js/" ,
        contentBase : path.resolve(__dirname,"public")
    },
    watch : true ,
     resolve :{
         extensions : [".js" , ".jsx" ]
     },

 
     
}