module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
