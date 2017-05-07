module.exports = {
  context: __dirname + "/src",
  entry: {
    app: ["angular", "./data.js", "./module.js","./main-controller.js","./add-controller.js"],
  },
  output: {
    path: __dirname + "/build",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
    ],
  },
  devServer: {
    inline:true,
    port: 80
  },
};