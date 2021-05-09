const path = require("path")
const webpack = require("webpack")
const node_externals = require("webpack-node-externals")
const LoadablePlugin = require('@loadable/webpack-plugin')
 
 
module.exports = {
    context : path.resolve(__dirname,"src") ,
    entry : "./server.jsx" ,
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
        path:path.resolve(__dirname,"build","js"),

        filename : "ssr-bundle.js"
    },
 
    devServer :{

        publicPath : "/public/assets/js/" ,
        contentBase : path.resolve(__dirname,"public")
    } ,
    watch : false ,
     resolve :{
         extensions : [".js" , ".jsx" ]
     },
     externals:  [node_externals()],

      

      
    plugins: [
       
            new webpack.DefinePlugin({
              __isBrowser__: 'false',
            }),
          new LoadablePlugin()
    ]
   
 
     
}