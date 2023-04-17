const path = require("path");

module.exports = {
  // ...
  output: {
    // ...
    publicPath: "",
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
  node: {
    __dirname: true,
  },
  // ...
};