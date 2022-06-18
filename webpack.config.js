const path = require('path');

module.exports = {
  // entry: path.join(__dirname, './index.js'),
  entry: {
    index: path.join(__dirname, './index.js'),
    numberUtil: path.join(__dirname, './src/util/numberUtil'),
    arrayutil: path.join(__dirname, './src/util/arrayUtil'),
    stringUtil: path.join(__dirname, './src/util/stringUtil'),
    objectUtil: path.join(__dirname, './src/util/objectUtil'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // libraryTarget: 'commonjs2',
    libraryTarget: 'umd',
  },
};
