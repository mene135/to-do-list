const path = require('path');

module.exports = {
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'), // Path to serve static files from
    },
    compress: true, // Enable gzip compression
    port: 5500, // Port to run dev server on
    open: true // Open the browser when server starts
  },
  mode: 'production',
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle filename
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
};
