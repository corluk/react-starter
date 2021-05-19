module.exports = {
    presets: [
      ["@babel/preset-env", {targets: {node: "current"}}], "@babel/preset-react"
    ],
    "plugins": [
      [
        "@babel/plugin-transform-regenerator",
        {
          "asyncGenerators": false,
          "generators": false,
          "async": false
        }
      ]
      , "css-modules-transform"
      , "@babel/plugin-syntax-dynamic-import"
      , "@loadable/babel-plugin"
    ]
};
