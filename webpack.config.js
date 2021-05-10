const path = require("path");


module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./App.jsx",
    module: {
        rules: [ {test: /\.jsx?/,
            use: "babel-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },

     resolve: {
         extensions: [".js", ".jsx" ]
     },



};
