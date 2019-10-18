const path = require('path');

module.exports = {
  mode:"development",
  entry:path.resolve(__dirname, 'src'),
  output:{
    path:path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        options:{
          plugins:[
            "transfrom-class"
          ]
        }
      }
    ]
  }
}