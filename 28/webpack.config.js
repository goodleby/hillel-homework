const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const defs = {
    sourcemap: {
      development: 'source-map'
    },
    usehash: {
      production: true
    }
  };
  return {
    mode: argv.mode || 'production',
    devtool: (env && env.sourcemap) || defs.sourcemap[argv.mode] || false,
    devServer: {
      contentBase: './dist'
    },
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: `[name]${
        (env && env.usehash) || defs.usehash[argv.mode] ? '.[contenthash]' : ''
      }.bundle.js`,
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      /** Chunking */
      // runtimeChunk: 'single',
      // moduleIds: 'hashed',
      // splitChunks: {
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'modules',
      //       chunks: 'all'
      //     }
      //   }
      // }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({template: path.resolve(__dirname, './src/index.html')})
    ],
    module: {
      rules: [
        {
          test: /\.js$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['babel-loader']
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'src'),
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: (env && !!env.sourcemap) || !!defs.sourcemap[argv.mode]
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: loader => [require('postcss-preset-env')()]
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['file-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          include: path.resolve(__dirname, 'src'),
          use: ['file-loader']
        }
      ]
    }
  };
};
