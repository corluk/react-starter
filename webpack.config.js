const path = require("path")
const webpack = require("webpack")
const LoadablePlugin = require('@loadable/webpack-plugin')
 
module.exports = {
    context : path.resolve(__dirname,"src","front") ,
    entry : "./App.jsx" ,
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

      

      
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV" :JSON.stringify('development') ,
            "process.env.API_URL"  : JSON.stringify("http://localhost:3000"),

        }),new LoadablePlugin()
    ],
    externals : {
        "ConfigData" : {
            apiUrl : "http://localhost:3000"
        }
    },
 
     
}