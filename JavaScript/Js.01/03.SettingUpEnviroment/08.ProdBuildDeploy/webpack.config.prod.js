import path from 'path';
import webpack from 'webpack';//Added For Minify
import HtmlWebpackPlugin from 'html-webpack-plugin';//Template Bundle Dynamic & Minifying
import WebpackMd5Hash from 'webpack-md5-hash';//Cache Busting
import ExtractTextPlugin from 'extract-text-webpack-plugin';//Css With Hash Cache Busting

export default {
  debug: true,
  devtool: 'source-map',/***Creating Source Map,Highest Quality */
  noInfo: false,/***List Of All The Files To Bundle */
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    other: path.resolve(__dirname, 'src/other')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js' //Name In The entry Section Will Be Used When Bundled
  },
  plugins: [
    // Generate An External Css File With A Hash In The Filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash The Files Using Md5 So That Their Names Change When The Content Changes.
    new WebpackMd5Hash(),
    // Use CommonsChunkPlugin To Create A Separate Bundle
    // Of other Libraries So That They're Cached Separately.
    //Chunk===Bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'other'
    }),
    // Create Html File That Includes Reference To BundledJs.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true, //WebPack Will Inject Any Necessary Js To Template.We Can Remove HardCode Script Tag From Index.html.
      trackJSToken: null // Properties You Define Here Are Available In index.html Using htmlWebpackPlugin.options.trackJSToken
    }),
    new webpack.optimize.DedupePlugin(),//Eliminate Duplicate Packages When Generating Bundle
    new webpack.optimize.UglifyJsPlugin()//Added For Minify
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
